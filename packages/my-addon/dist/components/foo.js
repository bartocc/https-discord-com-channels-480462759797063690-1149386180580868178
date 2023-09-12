import { precompileTemplate } from '@ember/template-compilation';
import Component from '@glimmer/component';
import { hash } from '@ember/helper';
import { setComponentTemplate, Input } from '@ember/component';

/*****************************
      ConsumingComponent
*****************************/

class ConsumingComponent extends Component {}

/*****************************
        FooComponent
*****************************/
setComponentTemplate(precompileTemplate(`
    <FooComponent as |f|>
      {{!-- No error here --}}
      <f.Input />
    </FooComponent>
  `, {
  strictMode: true,
  scope: () => ({
    FooComponent,
    f
  })
}), ConsumingComponent);
class FooComponent extends Component {}
setComponentTemplate(precompileTemplate(`
    {{yield (hash Input=(component Input type="dummy"))}}
  `, {
  strictMode: true,
  scope: () => ({
    hash,
    Input
  })
}), FooComponent);

export { FooComponent as default };
//# sourceMappingURL=foo.js.map
