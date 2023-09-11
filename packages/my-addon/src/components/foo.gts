import Component from '@glimmer/component';
import { hash } from '@ember/helper';
import { Input } from '@ember/component';
import { WithBoundArgs } from '@glint/template';

/*****************************
      ConsumingComponent
*****************************/

class ConsumingComponent extends Component {
  <template>
    <FooComponent as |f|>
      {{!-- No error here --}}
      <f.Input />
    </FooComponent>
  </template>
}

/*****************************
        FooComponent
*****************************/

interface FooSignature {
  Blocks: {default: [{Input: WithBoundArgs<typeof Input, 'type'>}]};
}

export default class FooComponent extends Component<FooSignature> {
  <template>
    {{yield (hash Input=(component Input type="dummy"))}}
  </template>
}
