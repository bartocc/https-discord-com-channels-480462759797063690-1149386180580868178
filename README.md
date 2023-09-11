# Reproduction repo

for [this Discord thread](https://discord.com/channels/480462759797063690/1149386180580868178)

## How to reproduce

Running `yarn workspace my-addon glint` does not typecheck…

```txt
app/templates/application.hbs:6:3 - error TS2349: This expression is not callable.
  Type 'never' has no call signatures.

6   <f.Input />
    ~~~~~~~~~~~
```
