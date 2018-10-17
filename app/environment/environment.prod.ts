// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
export const environment = {
  name: 'production',
  production: true,
  version: '2.0',
  rollbar_key: '',
  date_format: 'DD MM YY HH:mm:ss',
  api: {
    client_id:     'CLIENTID',
    client_secret: 'CLIENTSECRET',
    host:          'BACKENDURL',
    token_path:    '/oauth/v2/token'
  }
};
