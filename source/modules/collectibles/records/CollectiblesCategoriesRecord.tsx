// Module ID: 7022
// Function ID: 7023
// Name: fromServer
// Dependencies: [7023, 7005, 2]

// Module 7022 (fromServer)
import fromServer from "fromServer";
import closure_1 from "fromServer";

let prototype;
prototype = function CollectiblesCategoriesRecord(categories) {
  const obj = Object.create(new.target.prototype);
  categories = categories.categories;
  obj.categories = categories.map((arg0) => closure_1.fromServer(arg0));
  const collections = categories.collections;
  obj.collections = collections.map((arg0) => fromServer.fromServer(arg0));
  return obj;
}.prototype;
prototype["fromServer"] = function fromServer(categories) {
  if (typeof prototype !== "function") {
    HermesBuiltin.throwTypeError();
  }
  const obj = Object.create(prototype.prototype);
  categories = categories.categories;
  obj.categories = categories.map((arg0) => closure_1.fromServer(arg0));
  const collections = categories.collections;
  obj.collections = collections.map((arg0) => fromServer.fromServer(arg0));
  return obj;
};
const result = require("set").fileFinishedImporting("modules/collectibles/records/CollectiblesCategoriesRecord.tsx");

export const CollectiblesCategoriesRecord = prototype;
