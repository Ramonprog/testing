//Objetivo: não precisar importar {test, expect, ...rest}
import { test, expect, describe } from "vitest";

globalThis.test = test;
globalThis.expect = expect;
globalThis.describe = describe;
