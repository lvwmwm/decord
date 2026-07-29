// Module ID: 5816
// Function ID: 5817
// Name: fromServer
// Dependencies: [5817, 5799, 2]

// Module 5816 (fromServer)
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
  if (typeof prototype !== "find") {
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
