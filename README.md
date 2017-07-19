# Problem statement
generates a v4 RFC4122 compliant UUID

# Example usage

> note: in examples, VERSION represents a version of the uuid.v4.generate pkg

## install

```shell
opctl pkg install github.com/opspec-pkgs/uuid.v4.generate#VERSION
```

## run

```
opctl run github.com/opspec-pkgs/uuid.v4.generate#VERSION
```

## compose

```yaml
op:
  pkg: { ref: github.com/opspec-pkgs/uuid.v4.generate#VERSION }
  outputs:
    uuid:
```

# Support

join us on [![Slack](https://opspec-slackin.herokuapp.com/badge.svg)](https://opspec-slackin.herokuapp.com/)
or [open an issue](https://github.com/opspec-pkgs/uuid.v4.generate/issues)
