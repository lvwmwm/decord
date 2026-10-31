// Module ID: 12841
// Function ID: 12842
// Name: SourceMapGenerator
// Dependencies: [12842, 12843, 12844, 12845]

// Module 12841 (SourceMapGenerator)
import _mod12842 from "module_12842" /* 12842 */;
import ArraySet from "ArraySet" /* 12843 */;
import MappingList from "MappingList" /* 12844 */;
import base64VLQ_encode from "base64VLQ_encode" /* 12845 */;

const require = globalThis.__r;
let _require, dependencyMap, hasOwnProperty;

class SourceMapGenerator {
  constructor(arg0) {
    let arraySet;
    let arraySet2;
    let mappingList;
    let obj2;
    let obj3;
    let obj4;
    let tmp;
    ({ _file: obj2.getArg(tmp, "file", null), _sourceRoot: obj3.getArg(tmp, "sourceRoot", null), _skipValidation: obj4.getArg(tmp, "skipValidation", false), _sources: arraySet, _names: arraySet2, _mappings: mappingList, _sourcesContents: null });
    tmp = arg0 || {};
    obj2 = _mod12842;
    obj3 = _mod12842;
    obj4 = _mod12842;
    arraySet = new ArraySet.ArraySet();
    arraySet2 = new ArraySet.ArraySet();
    mappingList = new MappingList.MappingList();
  }
  static fromSourceMap(file) {
    let arraySet;
    let arraySet2;
    let mappingList;
    let obj3;
    let obj4;
    let obj5;
    let obj7;
    _require = file;
    const sourceRoot = file.sourceRoot;
    let obj = { file: file.file, sourceRoot };
    let obj2 = Object.create(obj7.prototype);
    obj7 = { _file: obj3.getArg(obj, "file", null), _sourceRoot: obj4.getArg(obj, "sourceRoot", null), _skipValidation: obj5.getArg(obj, "skipValidation", false), _sources: arraySet, _names: arraySet2, _mappings: mappingList, _sourcesContents: null };
    obj3 = require("module_12842");
    obj4 = require("module_12842");
    obj5 = require("module_12842");
    arraySet = new require("ArraySet").ArraySet();
    arraySet2 = new require("ArraySet").ArraySet();
    mappingList = new require("MappingList").MappingList();
    file.eachMapping((line) => {
      const obj = { generated: { line: line.generatedLine, column: line.generatedColumn } };
      if (null != line.source) {
        obj.source = line.source;
        if (null != sourceRoot) {
          const obj2 = _mod12842;
          obj.source = obj2.relative(tmp, obj.source);
        }
        const obj4 = { line: null, column: null };
        ({ originalLine: obj3.line, originalColumn: obj3.column } = line);
        obj.original = obj4;
        if (null != line.name) {
          obj.name = line.name;
        }
      }
      obj7.addMapping(obj);
    });
    const sources = file.sources;
    const item = sources.forEach((item) => {
      let relativeResult = item;
      if (null !== sourceRoot) {
        const obj = _mod12842;
        relativeResult = obj.relative(tmp, item);
      }
      const _sources = obj7._sources;
      if (!_sources.has(relativeResult)) {
        const _sources2 = obj2._sources;
        _sources2.add(relativeResult);
      }
      const sourceContentForResult = file.sourceContentFor(item);
      if (null != sourceContentForResult) {
        obj7.setSourceContent(item, sourceContentForResult);
      }
    });
    return obj7;
  }
  addMapping(arg0) {
    let line;
    const obj = _mod12842;
    const arg = obj.getArg(arg0, "generated");
    const obj2 = _mod12842;
    const self = obj2.getArg(arg0, "original", null);
    const obj3 = _mod12842;
    const arg2 = obj3.getArg(arg0, "source", null);
    const obj4 = _mod12842;
    const arg3 = obj4.getArg(arg0, "name", null);
    if (!this._skipValidation) {
      self._validateMapping(arg, self, arg2, arg3);
    }
    let tmp11 = arg2;
    if (null != arg2) {
      const _String = String;
      const StringResult = String(arg2);
      const _sources = self._sources;
      tmp11 = StringResult;
      if (!_sources.has(StringResult)) {
        const _sources2 = self._sources;
        _sources2.add(StringResult);
        tmp11 = StringResult;
      }
    }
    let tmp15 = arg3;
    if (null != arg3) {
      const _String2 = String;
      const StringResult1 = String(arg3);
      const _names = self._names;
      tmp15 = StringResult1;
      if (!_names.has(StringResult1)) {
        const _names2 = self._names;
        _names2.add(StringResult1);
        tmp15 = StringResult1;
      }
    }
    const _mappings = self._mappings;
    const obj5 = { generatedLine: arg.line, generatedColumn: arg.column, originalLine: line, originalColumn: null != self && self.column, source: tmp11, name: tmp15 };
    line = null != self;
    const add = _mappings.add;
    if (line) {
      line = self.line;
    }
    add(obj5);
  }
  setSourceContent(relativeResult, arg1) {
    const self = this;
    if (null != this._sourceRoot) {
      const obj = _mod12842;
      relativeResult = obj.relative(self._sourceRoot, relativeResult);
    }
    if (null != arg1) {
      if (!self._sourcesContents) {
        const _Object2 = Object;
        self._sourcesContents = Object.create(null);
      }
      const _sourcesContents2 = self._sourcesContents;
      _sourcesContents2[_mod12842.toSetString(relativeResult)] = arg1;
      _mod12842;
    } else if (self._sourcesContents) {
      const _sourcesContents = self._sourcesContents;
      const obj2 = _mod12842;
      delete _sourcesContents[obj2.toSetString(obj2, tmp)];
      const _Object = Object;
      if (0 === Object.keys(self._sourcesContents).length) {
        self._sourcesContents = null;
      }
    }
  }
  applySourceMap(file, arg1, arg2) {
    let closure_1;
    _require = file;
    let tmp = arg1;
    dependencyMap = arg2;
    let closure_2 = arg1;
    if (null == arg1) {
      if (null == file.file) {
        const _Error = Error;
        const self2 = this;
        const self3 = this;
        const error = new Error("SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, or the source map's \"file\" property. Both were omitted.");
        throw error;
      } else {
        file = file.file;
        closure_2 = file;
        tmp = file;
      }
    }
    let self = this;
    const _sourceRoot = this._sourceRoot;
    if (null != _sourceRoot) {
      const tmp2 = _require;
      const tmp3 = dependencyMap;
      let obj = require("module_12842");
      closure_2 = obj.relative(_sourceRoot, tmp);
    }
    const arraySet = new require("ArraySet").ArraySet();
    const arraySet2 = new require("ArraySet").ArraySet();
    const _mappings = self._mappings;
    _mappings.unsortedForEach((source) => {
      if (source.source === closure_2) {
        if (null != source.originalLine) {
          const obj4 = { line: null, column: null };
          ({ originalLine: obj3.line, originalColumn: obj3.column } = source);
          const originalPositionForResult = file.originalPositionFor(obj4);
          if (null != originalPositionForResult.source) {
            source.source = originalPositionForResult.source;
            if (null != closure_1) {
              const obj = _mod12842;
              source.source = obj.join(tmp17, source.source);
            }
            if (null != _sourceRoot) {
              const obj2 = _mod12842;
              source.source = obj2.relative(tmp3, source.source);
            }
            ({ line: source.originalLine, column: source.originalColumn } = originalPositionForResult);
            if (null != originalPositionForResult.name) {
              source.name = originalPositionForResult.name;
            }
          }
        }
      }
      source = source.source;
      const hasItem = null == source || arraySet.has(source);
      if (!hasItem) {
        arraySet.add(source);
      }
      const name = source.name;
      const hasItem1 = null == name || arraySet2.has(name);
      if (!hasItem1) {
        arraySet2.add(name);
      }
    }, self);
    self._sources = arraySet;
    self._names = arraySet2;
    const sources = file.sources;
    const item = sources.forEach(function(item) {
      const sourceContentForResult = file.sourceContentFor(item);
      if (null != sourceContentForResult) {
        let joined = item;
        if (null != closure_1) {
          const obj = _mod12842;
          joined = obj.join(tmp2, item);
        }
        let relativeResult = joined;
        if (null != _sourceRoot) {
          const obj2 = _mod12842;
          relativeResult = obj2.relative(tmp6, joined);
        }
        const self = this;
        this.setSourceContent(relativeResult, sourceContentForResult);
      }
    }, self);
  }
  _validateMapping(generated, line, source, name) {
    const tmp = line;
    if (tmp) {
      if (typeof line.line !== "number") {
        if (typeof line.column !== "number") {
          const _Error = Error;
          const self = this;
          const self2 = this;
          const error = new Error("original.line and original.column are not numbers -- you probably meant to omit the original mapping entirely and only map the generated position. If so, pass null for the original mapping instead of an object with empty or null values.");
          throw error;
        }
      }
    }
    const obj = { generated, source, original: line, name };
    const error1 = new Error("Invalid mapping: " + JSON.stringify(obj));
    throw error1;
  }
  _serializeMappings() {
    let generatedLine;
    const self = this;
    const _mappings = this._mappings;
    const toArrayResult = _mappings.toArray();
    let num = 0;
    let str = "";
    let num2 = 0;
    let num3 = 0;
    let num4 = 0;
    let num5 = 0;
    let num6 = 1;
    let num7 = 0;
    let str2 = "";
    if (0 < toArrayResult.length) {
      while (true) {
        let tmp10;
        let num8;
        let str3;
        let tmp = toArrayResult[num];
        if (tmp.generatedLine !== num6) {
          let sum = num6;
          let str4 = "";
          tmp10 = num6;
          num8 = 0;
          str3 = "";
          if (tmp.generatedLine !== num6) {
            do {
              str4 = `;`;
              sum = sum + 1;
              num8 = 0;
              str3 = str4;
              tmp10 = sum;
              generatedLine = tmp.generatedLine;
            } while (generatedLine !== sum);
          }
        } else {
          tmp10 = num6;
          num8 = num7;
          str3 = "";
          if (0 < num) {
            tmp10 = num6;
            num8 = num7;
            str3 = ",";
            let sum6 = str;
            let tmp24 = num2;
            let tmp25 = num3;
            let tmp26 = num4;
            let tmp27 = num5;
            let tmp28 = num6;
            let tmp29 = num7;
            num = num + 1;
            str = sum6;
            num2 = tmp24;
            num3 = tmp25;
            num4 = tmp26;
            num5 = tmp27;
            num6 = tmp28;
            num7 = tmp29;
            str2 = sum6;
            if (num >= length) {
              break;
            }
          }
        }
        let tmp12 = require;
        let encoder = base64VLQ_encode;
        let sum1 = str3 + encoder.encode(tmp.generatedColumn - num8);
        let tmp15 = num2;
        let tmp16 = num3;
        let tmp17 = num4;
        let tmp18 = num5;
        let tmp19 = sum1;
        let generatedColumn = tmp.generatedColumn;
        if (null != tmp.source) {
          let _sources = self._sources;
          let index = _sources.indexOf(tmp.source);
          let encoder3 = tmp12(12845);
          let sum2 = sum1 + encoder3.encode(index - num2);
          let encoder4 = tmp12(12845);
          let sum3 = sum2 + encoder4.encode(tmp.originalLine - 1 - num4);
          let diff = tmp.originalLine - 1;
          let encoder5 = tmp12(12845);
          let sum4 = sum3 + encoder5.encode(tmp.originalColumn - num5);
          let tmp22 = num3;
          let sum5 = sum4;
          let originalColumn = tmp.originalColumn;
          if (null != tmp.name) {
            let _names = self._names;
            let index1 = _names.indexOf(tmp.name);
            let encoder2 = tmp12(12845);
            sum5 = sum4 + encoder2.encode(index1 - num3);
            tmp22 = index1;
          }
          tmp16 = tmp22;
          tmp19 = sum5;
          tmp15 = index;
          tmp17 = diff;
          tmp18 = originalColumn;
        }
        sum6 = str + tmp19;
        tmp24 = tmp15;
        tmp25 = tmp16;
        tmp26 = tmp17;
        tmp27 = tmp18;
        tmp28 = tmp10;
        tmp29 = generatedColumn;
      }
    }
    return str2;
  }
  _generateSourcesContent(arr, arg1) {
    let closure_0 = arg1;
    return arr.map(function(item) {
      const self = this;
      if (this._sourcesContents) {
        let relativeResult = item;
        if (null != closure_0) {
          const obj = _mod12842;
          relativeResult = obj.relative(tmp2, item);
        }
        const obj2 = _mod12842;
        const toSetStringResult = obj2.toSetString(relativeResult);
        const _Object = Object;
        hasOwnProperty = Object.prototype.hasOwnProperty;
        let tmp10 = null;
        if (hasOwnProperty.call(self._sourcesContents, toSetStringResult)) {
          tmp10 = self._sourcesContents[toSetStringResult];
        }
        return tmp10;
      } else {
        return null;
      }
    }, this);
  }
  toJSON() {
    let _names;
    let _sources;
    const self = this;
    const obj = { version: this._version, sources: _sources.toArray(), names: _names.toArray(), mappings: this._serializeMappings() };
    _sources = this._sources;
    _names = this._names;
    if (null != this._file) {
      obj.file = self._file;
    }
    if (null != self._sourceRoot) {
      obj.sourceRoot = self._sourceRoot;
    }
    if (self._sourcesContents) {
      obj.sourcesContent = self._generateSourcesContent(obj.sources, obj.sourceRoot);
    }
    return obj;
  }
  toString() {
    return JSON.stringify(this.toJSON());
  }
}
SourceMapGenerator.prototype._version = 3;

export { SourceMapGenerator };
