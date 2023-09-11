// Easily allow apps, which are not yet using strict mode templates, to consume your Glint types, by importing this file.
// Add all your components, helpers and modifiers to the template registry here, so apps don't have to do this.
// See https://typed-ember.gitbook.io/glint/using-glint/ember/authoring-addons

// @ts-ignore We need to disable VSCode's built-in TS language service
import type FooComponent from './components/foo';

export default interface Registry {
  'FooComponent': typeof FooComponent;
}
