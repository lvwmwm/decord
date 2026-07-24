// Module ID: 12032
// Function ID: 92969
// Name: applicationWidgetStaticFieldConfigSchema
// Dependencies: [12033, 12031, 12030, 12109, 2]

// Module 12032 (applicationWidgetStaticFieldConfigSchema)
import { z } from "module_12033";
import { z as z2 } from "module_12033";
import { z as z3 } from "module_12033";
import { z as z4 } from "module_12033";
import { z as z5 } from "module_12033";
import { z as z6 } from "module_12033";
import { z as z7 } from "module_12033";
import { z as z8 } from "module_12033";
import { z as z9 } from "module_12033";
import { z as z10 } from "module_12033";
import { z as z11 } from "module_12033";
import { z as z12 } from "module_12033";
import { z as z13 } from "module_12033";
import { z as z14 } from "module_12033";
import { z as z15 } from "module_12033";
import { z as z16 } from "module_12033";
import { z as z17 } from "module_12033";

let obj = {};
obj.value_type = z2.enum(require("ApplicationWidgetFieldValueType").ApplicationWidgetFieldValueType);
obj.presentation_type = z3.enum(require("ApplicationWidgetFieldPresentationType").ApplicationWidgetFieldPresentationType);
obj.value = z4.string();
let objectResult = z.object(obj);
obj = {};
obj.value_type = z6.enum(require("ApplicationWidgetFieldValueType").ApplicationWidgetFieldValueType);
obj.presentation_type = z7.enum(require("ApplicationWidgetFieldPresentationType").ApplicationWidgetFieldPresentationType);
obj.value = z8.string();
obj.fallback = objectResult.nullish();
objectResult = z5.object(obj);
obj = {};
obj.fields = z10.partialRecord(z11.string(), objectResult);
const objectResult1 = z9.object(obj);
const obj1 = {};
obj1.layout = z13.string();
obj1.components = z14.partialRecord(z15.string(), objectResult1);
const objectResult2 = z12.object(obj1);
const partialRecordResult = z16.partialRecord(z17.enum(require("ApplicationWidgetConfigSurface").ApplicationWidgetConfigSurface), objectResult2);
const result = require("ApplicationWidgetFieldPresentationType").fileFinishedImporting("../discord_common/js/packages/application-widget-renderer/src/schemas.tsx");

export const applicationWidgetStaticFieldConfigSchema = objectResult;
export const applicationWidgetFieldConfigSchema = objectResult;
export const applicationWidgetComponentConfigSchema = objectResult1;
export const applicationWidgetSurfaceConfigSchema = objectResult2;
export const applicationWidgetSurfaceConfigsSchema = partialRecordResult;
