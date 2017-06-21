# problem statement
generates a v4 RFC4122 compliant UUID

# example usage

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
run:
  op:
    pkg: { ref: github.com/opspec-pkgs/uuid.v4.generate#VERSION }
    outputs: { uuid: }
```
