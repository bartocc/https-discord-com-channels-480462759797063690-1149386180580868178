import '@glint/environment-ember-loose';

import type MyAddonRegistry from 'my-addon/template-registry';

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry
    extends MyAddonRegistry /* other addon registries */ {}
}
