import Component from '@glimmer/component';
import { Input } from '@ember/component';
import { WithBoundArgs } from '@glint/template';
/*****************************
        FooComponent
*****************************/
interface FooSignature {
    Blocks: {
        default: [{
            Input: WithBoundArgs<typeof Input, 'type'>;
        }];
    };
}
declare class FooComponent extends Component<FooSignature> {
}
export { FooComponent as default };
//# sourceMappingURL=components/foo.d.ts.map