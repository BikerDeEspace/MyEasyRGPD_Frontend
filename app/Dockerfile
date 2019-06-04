#########################
### BUILD ENVIRONMENT ###
#########################
# BASE IMAGE
FROM node:9.6.1 as builder

# UPDATE & INSTALL WGET
RUN printf "deb http://archive.debian.org/debian/ jessie main\ndeb-src http://archive.debian.org/debian/ jessie main\ndeb http://security.debian.org jessie/updates main\ndeb-src http://security.debian.org jessie/updates main" > /etc/apt/sources.list
RUN apt-get update && apt-get install -y wget

#######################
# PIALAB FRONT SOURCE #
#######################
# DESACTIVATE CACHE FOR BUILD
ARG CACHEBUST=1

# COPY APP
COPY src/ /usr/share/pialab
# SET WORKDIR
WORKDIR /usr/share/pialab

# INSTALL & CACHE APP DEPENDENCIES
RUN npm install -g @angular/cli@1.7.4 --unsafe
# ADD "/usr/src/pialab/node_modules/.bin" TO $PATH
ENV PATH /usr/share/pialab/node_modules/.bin:$PATH

# CLIENT CREDENTIALS
ARG CLIENTID
ARG CLIENTSECRET
ARG BACKENDURL
# COPY & SET ENVIRONMENT FILE
COPY environment/environment.prod.ts /usr/share/pialab/src/environments/environment.prod.ts
RUN sed -i 's,CLIENTID,'${CLIENTID}',g' /usr/share/pialab/src/environments/environment.prod.ts
RUN sed -i 's,CLIENTSECRET,'${CLIENTSECRET}',g' /usr/share/pialab/src/environments/environment.prod.ts
RUN sed -i 's,BACKENDURL,'${BACKENDURL}',g' /usr/share/pialab/src/environments/environment.prod.ts

# NPM INSTALL
RUN npm install
# BUILD APP FOR PRODUCTION
RUN ng build --prod

###############################
### PRODUCTION NGINX SERVER ###
###############################

# BASE IMAGE
FROM nginx:1.13.9-alpine

# copy artifact build from the 'build environment'
COPY --from=builder /usr/share/pialab/dist /usr/share/nginx/html

# EXPOSE PORT 343
EXPOSE 80

# START SERVER
CMD ["nginx", "-g", "daemon off;"]