import * as rewiremock from 'rewiremock/webpack';
import { addPlugin, plugins } from 'rewiremock';

console.log('[initRewiremock.ts]', module.id);

rewiremock.overrideEntryPoint(module); // this is important. This command is "transfering" this module parent to rewiremock
// we need webpack aliases
addPlugin(plugins.webpackAlias);
// and all stub names would be a relative
addPlugin(plugins.relative);
// and all stubs should be used. Lets make it default!
addPlugin(plugins.usedByDefault);
export { rewiremock }