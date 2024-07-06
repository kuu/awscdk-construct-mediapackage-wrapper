# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudFront <a name="CloudFront" id="awscdk-construct-mediapackage-wrapper.CloudFront"></a>

#### Initializers <a name="Initializers" id="awscdk-construct-mediapackage-wrapper.CloudFront.Initializer"></a>

```typescript
import { CloudFront } from 'awscdk-construct-mediapackage-wrapper'

new CloudFront(scope: Construct, id: string, __2: CloudFrontProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-construct-mediapackage-wrapper.CloudFront.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#awscdk-construct-mediapackage-wrapper.CloudFront.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#awscdk-construct-mediapackage-wrapper.CloudFront.Initializer.parameter.__2">__2</a></code> | <code><a href="#awscdk-construct-mediapackage-wrapper.CloudFrontProps">CloudFrontProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="awscdk-construct-mediapackage-wrapper.CloudFront.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="awscdk-construct-mediapackage-wrapper.CloudFront.Initializer.parameter.id"></a>

- *Type:* string

---

##### `__2`<sup>Required</sup> <a name="__2" id="awscdk-construct-mediapackage-wrapper.CloudFront.Initializer.parameter.__2"></a>

- *Type:* <a href="#awscdk-construct-mediapackage-wrapper.CloudFrontProps">CloudFrontProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#awscdk-construct-mediapackage-wrapper.CloudFront.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="awscdk-construct-mediapackage-wrapper.CloudFront.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#awscdk-construct-mediapackage-wrapper.CloudFront.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="awscdk-construct-mediapackage-wrapper.CloudFront.isConstruct"></a>

```typescript
import { CloudFront } from 'awscdk-construct-mediapackage-wrapper'

CloudFront.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="awscdk-construct-mediapackage-wrapper.CloudFront.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-construct-mediapackage-wrapper.CloudFront.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#awscdk-construct-mediapackage-wrapper.CloudFront.property.distribution">distribution</a></code> | <code>aws-cdk-lib.aws_cloudfront.Distribution</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="awscdk-construct-mediapackage-wrapper.CloudFront.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `distribution`<sup>Required</sup> <a name="distribution" id="awscdk-construct-mediapackage-wrapper.CloudFront.property.distribution"></a>

```typescript
public readonly distribution: Distribution;
```

- *Type:* aws-cdk-lib.aws_cloudfront.Distribution

---


### LambdaEdge <a name="LambdaEdge" id="awscdk-construct-mediapackage-wrapper.LambdaEdge"></a>

#### Initializers <a name="Initializers" id="awscdk-construct-mediapackage-wrapper.LambdaEdge.Initializer"></a>

```typescript
import { LambdaEdge } from 'awscdk-construct-mediapackage-wrapper'

new LambdaEdge(scope: Construct, id: string, props: LambdaEdgeProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-construct-mediapackage-wrapper.LambdaEdge.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#awscdk-construct-mediapackage-wrapper.LambdaEdge.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#awscdk-construct-mediapackage-wrapper.LambdaEdge.Initializer.parameter.props">props</a></code> | <code><a href="#awscdk-construct-mediapackage-wrapper.LambdaEdgeProps">LambdaEdgeProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="awscdk-construct-mediapackage-wrapper.LambdaEdge.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="awscdk-construct-mediapackage-wrapper.LambdaEdge.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="awscdk-construct-mediapackage-wrapper.LambdaEdge.Initializer.parameter.props"></a>

- *Type:* <a href="#awscdk-construct-mediapackage-wrapper.LambdaEdgeProps">LambdaEdgeProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#awscdk-construct-mediapackage-wrapper.LambdaEdge.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="awscdk-construct-mediapackage-wrapper.LambdaEdge.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#awscdk-construct-mediapackage-wrapper.LambdaEdge.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="awscdk-construct-mediapackage-wrapper.LambdaEdge.isConstruct"></a>

```typescript
import { LambdaEdge } from 'awscdk-construct-mediapackage-wrapper'

LambdaEdge.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="awscdk-construct-mediapackage-wrapper.LambdaEdge.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-construct-mediapackage-wrapper.LambdaEdge.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#awscdk-construct-mediapackage-wrapper.LambdaEdge.property.func">func</a></code> | <code>aws-cdk-lib.aws_cloudfront.experimental.EdgeFunction</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="awscdk-construct-mediapackage-wrapper.LambdaEdge.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `func`<sup>Required</sup> <a name="func" id="awscdk-construct-mediapackage-wrapper.LambdaEdge.property.func"></a>

```typescript
public readonly func: EdgeFunction;
```

- *Type:* aws-cdk-lib.aws_cloudfront.experimental.EdgeFunction

---


### Wrapper <a name="Wrapper" id="awscdk-construct-mediapackage-wrapper.Wrapper"></a>

#### Initializers <a name="Initializers" id="awscdk-construct-mediapackage-wrapper.Wrapper.Initializer"></a>

```typescript
import { Wrapper } from 'awscdk-construct-mediapackage-wrapper'

new Wrapper(scope: Construct, id: string, props: WrapperProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-construct-mediapackage-wrapper.Wrapper.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#awscdk-construct-mediapackage-wrapper.Wrapper.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#awscdk-construct-mediapackage-wrapper.Wrapper.Initializer.parameter.props">props</a></code> | <code><a href="#awscdk-construct-mediapackage-wrapper.WrapperProps">WrapperProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="awscdk-construct-mediapackage-wrapper.Wrapper.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="awscdk-construct-mediapackage-wrapper.Wrapper.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="awscdk-construct-mediapackage-wrapper.Wrapper.Initializer.parameter.props"></a>

- *Type:* <a href="#awscdk-construct-mediapackage-wrapper.WrapperProps">WrapperProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#awscdk-construct-mediapackage-wrapper.Wrapper.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="awscdk-construct-mediapackage-wrapper.Wrapper.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#awscdk-construct-mediapackage-wrapper.Wrapper.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="awscdk-construct-mediapackage-wrapper.Wrapper.isConstruct"></a>

```typescript
import { Wrapper } from 'awscdk-construct-mediapackage-wrapper'

Wrapper.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="awscdk-construct-mediapackage-wrapper.Wrapper.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-construct-mediapackage-wrapper.Wrapper.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#awscdk-construct-mediapackage-wrapper.Wrapper.property.cf">cf</a></code> | <code><a href="#awscdk-construct-mediapackage-wrapper.CloudFront">CloudFront</a></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="awscdk-construct-mediapackage-wrapper.Wrapper.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cf`<sup>Required</sup> <a name="cf" id="awscdk-construct-mediapackage-wrapper.Wrapper.property.cf"></a>

```typescript
public readonly cf: CloudFront;
```

- *Type:* <a href="#awscdk-construct-mediapackage-wrapper.CloudFront">CloudFront</a>

---


## Structs <a name="Structs" id="Structs"></a>

### CloudFrontProps <a name="CloudFrontProps" id="awscdk-construct-mediapackage-wrapper.CloudFrontProps"></a>

#### Initializer <a name="Initializer" id="awscdk-construct-mediapackage-wrapper.CloudFrontProps.Initializer"></a>

```typescript
import { CloudFrontProps } from 'awscdk-construct-mediapackage-wrapper'

const cloudFrontProps: CloudFrontProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-construct-mediapackage-wrapper.CloudFrontProps.property.domainName">domainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#awscdk-construct-mediapackage-wrapper.CloudFrontProps.property.dashLambdaEdge">dashLambdaEdge</a></code> | <code><a href="#awscdk-construct-mediapackage-wrapper.LambdaEdge">LambdaEdge</a></code> | *No description.* |
| <code><a href="#awscdk-construct-mediapackage-wrapper.CloudFrontProps.property.hlsLambdaEdge">hlsLambdaEdge</a></code> | <code><a href="#awscdk-construct-mediapackage-wrapper.LambdaEdge">LambdaEdge</a></code> | *No description.* |

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="awscdk-construct-mediapackage-wrapper.CloudFrontProps.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

---

##### `dashLambdaEdge`<sup>Optional</sup> <a name="dashLambdaEdge" id="awscdk-construct-mediapackage-wrapper.CloudFrontProps.property.dashLambdaEdge"></a>

```typescript
public readonly dashLambdaEdge: LambdaEdge;
```

- *Type:* <a href="#awscdk-construct-mediapackage-wrapper.LambdaEdge">LambdaEdge</a>

---

##### `hlsLambdaEdge`<sup>Optional</sup> <a name="hlsLambdaEdge" id="awscdk-construct-mediapackage-wrapper.CloudFrontProps.property.hlsLambdaEdge"></a>

```typescript
public readonly hlsLambdaEdge: LambdaEdge;
```

- *Type:* <a href="#awscdk-construct-mediapackage-wrapper.LambdaEdge">LambdaEdge</a>

---

### LambdaEdgeProps <a name="LambdaEdgeProps" id="awscdk-construct-mediapackage-wrapper.LambdaEdgeProps"></a>

#### Initializer <a name="Initializer" id="awscdk-construct-mediapackage-wrapper.LambdaEdgeProps.Initializer"></a>

```typescript
import { LambdaEdgeProps } from 'awscdk-construct-mediapackage-wrapper'

const lambdaEdgeProps: LambdaEdgeProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-construct-mediapackage-wrapper.LambdaEdgeProps.property.code">code</a></code> | <code>aws-cdk-lib.aws_lambda.AssetCode</code> | *No description.* |

---

##### `code`<sup>Required</sup> <a name="code" id="awscdk-construct-mediapackage-wrapper.LambdaEdgeProps.property.code"></a>

```typescript
public readonly code: AssetCode;
```

- *Type:* aws-cdk-lib.aws_lambda.AssetCode

---

### WrapperProps <a name="WrapperProps" id="awscdk-construct-mediapackage-wrapper.WrapperProps"></a>

#### Initializer <a name="Initializer" id="awscdk-construct-mediapackage-wrapper.WrapperProps.Initializer"></a>

```typescript
import { WrapperProps } from 'awscdk-construct-mediapackage-wrapper'

const wrapperProps: WrapperProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-construct-mediapackage-wrapper.WrapperProps.property.domainName">domainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#awscdk-construct-mediapackage-wrapper.WrapperProps.property.dashWrapperFunction">dashWrapperFunction</a></code> | <code>aws-cdk-lib.aws_lambda.AssetCode</code> | *No description.* |
| <code><a href="#awscdk-construct-mediapackage-wrapper.WrapperProps.property.hlsWrapperFunction">hlsWrapperFunction</a></code> | <code>aws-cdk-lib.aws_lambda.AssetCode</code> | *No description.* |

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="awscdk-construct-mediapackage-wrapper.WrapperProps.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

---

##### `dashWrapperFunction`<sup>Optional</sup> <a name="dashWrapperFunction" id="awscdk-construct-mediapackage-wrapper.WrapperProps.property.dashWrapperFunction"></a>

```typescript
public readonly dashWrapperFunction: AssetCode;
```

- *Type:* aws-cdk-lib.aws_lambda.AssetCode

---

##### `hlsWrapperFunction`<sup>Optional</sup> <a name="hlsWrapperFunction" id="awscdk-construct-mediapackage-wrapper.WrapperProps.property.hlsWrapperFunction"></a>

```typescript
public readonly hlsWrapperFunction: AssetCode;
```

- *Type:* aws-cdk-lib.aws_lambda.AssetCode

---



