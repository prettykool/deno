// Copyright 2018-2023 the Deno authors. All rights reserved. MIT license.

import { assert, assertEquals } from "./test_util.ts";

Deno.test(function version() {
  const pattern = /^\d+\.\d+\.\d+/;
  assert(pattern.test(Deno.version.deno));
  assert(pattern.test(Deno.version.v8));
  assertEquals(Deno.version.typescript, "5.1.6");
});
