---
sidebar_position: 1
---

# Intro

A helper library that contains some useful extensions for different datatype that useful for day to day development

## Getting Started

Add `Bolt.Common.Extensions` nuget package in your project.

```csharp
nuget add Bolt.Common.Extensions
```

## Extension Methods

### Convert String to Boolean

Convert string to nullable boolean. If a string is null or can't parse to boolean then return null

<details>
  <summary>string?.ToBoolean() : bool?</summary>

```csharp
var got = "true".ToBoolean();
got.ShouldBe(true);

var got = "True".ToBoolean();
got.ShouldBe(true);

var got = "false".ToBoolean();
got.ShouldBe(false);

var got = "False".ToBoolean();
got.ShouldBe(false);

var got = "123".ToBoolean();
got.ShouldBe(null);

var got = "".ToBoolean();
got.ShouldBe(null);

string? nullStr = null;
var got = nullStr.ToBoolean();
got.ShouldBe(null);

```

</details>

### Convert nullable boolean to non nullable

<details>
  <summary>boolean?.NullSafe()</summary>

```csharp

boolean? maybeTrue = null;
maybeTrue.NullSafe().ShouldBe(false);
mayBeTrue = true;
maybeTrue.NullSafe().ShouldBe(true);

```

</details>
