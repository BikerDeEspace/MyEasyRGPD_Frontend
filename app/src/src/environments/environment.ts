// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
export const environment = {
  name: 'production',
  production: false,
  version: '1.0',
  rollbar_key: '',
  date_format: 'DD MM YY HH:mm:ss',
  api: {
    client_id:     '1ak1pq1a1y74cwccw08gg8ksosk400ogcwk8ww88gcoo8k4sko',
    client_secret: '3z49uwqtniwwss8ooksg4kw8kc0ogw40swswo4cswk8s0kg84w',
    host:          'http://127.0.0.1:8000',
    token_path:    '/oauth/v2/token'
  }
};
