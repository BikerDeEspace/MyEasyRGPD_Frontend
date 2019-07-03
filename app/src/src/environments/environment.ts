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
    client_id:     '5d3s6viwh4co0s4c4oowckowwkgs0k0c8googwcks8g8co00s',
    client_secret: '1kh6juzgmls04gkoowk8gsko4848ooosk4o8kk4ow8g40g84os',
    host:          'http://localhost:8000',
    token_path:    '/oauth/v2/token'
  }
};
