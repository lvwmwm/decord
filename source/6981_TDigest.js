// Module ID: 6981
// Function ID: 55806
// Name: TDigest
// Dependencies: []

// Module 6981 (TDigest)
class TDigest {
  constructor(arg0, arg1, arg2) {
    num = global;
    self = this;
    this.discrete = false === global;
    if (!global) {
      num = 0.01;
    }
    self.delta = num;
    num2 = 25;
    if (undefined !== require) {
      num2 = require;
    }
    self.K = num2;
    num3 = 1.1;
    if (undefined !== importDefault) {
      num3 = importDefault;
    }
    self.CX = num3;
    rBTree = new require(dependencyMap[0]).RBTree(compare_centroid_means);
    self.centroids = rBTree;
    self.nreset = 0;
    resetResult = self.reset();
    return;
  }
  reset() {
    centroids = this.centroids;
    clearResult = centroids.clear();
    this.n = 0;
    this.nreset = this.nreset + 1;
    this.last_cumulate = 0;
    return;
  }
  size() {
    return this.centroids.size;
  }
  toArray(arg0) {
    self = this;
    items = [];
    require = items;
    if (global) {
      flag = true;
      _cumulateResult = self._cumulate(true);
      centroids2 = self.centroids;
      eachResult = centroids2.each((arg0) => {
        items.push(arg0);
      });
    } else {
      centroids = self.centroids;
      eachResult1 = centroids.each((mean) => {
        items.push({ mean: mean.mean, n: mean.n });
      });
    }
    return items;
  }
  summary() {
    self = this;
    str = "approximating ";
    if (this.discrete) {
      str = "exact ";
    }
    sum = str + self.n;
    items = [, , , , , ];
    items[0] = `${tmp} samples using ${self.size()} centroids`;
    items[1] = `min = ${require("module_0")}`;
    items[2] = `Q1  = ${self.percentile(0.25)}`;
    items[3] = `Q2  = ${self.percentile(0.5)}`;
    items[4] = `Q3  = ${self.percentile(0.75)}`;
    items[5] = `max = ${require("module_1")}`;
    return items.join("\n");
  }
  push(arg0, arg1) {
    num = require;
    self = this;
    if (!require) {
      num = 1;
    }
    arr = global;
    if (!Array.isArray(global)) {
      items = [];
      items[0] = global;
      arr = items;
    }
    num2 = 0;
    if (0 < arr.length) {
      do {
        _digestResult = self._digest(arr[num2], num);
        num2 = num2 + 1;
        length = arr.length;
      } while (num2 < length);
    }
    return;
  }
  push_centroid(arg0) {
    self = this;
    arr = global;
    if (!Array.isArray(global)) {
      items = [];
      items[0] = global;
      arr = items;
    }
    num = 0;
    if (0 < arr.length) {
      do {
        _digestResult = self._digest(arr[num].mean, arr[num].n);
        num = num + 1;
        length = arr.length;
      } while (num < length);
    }
    return;
  }
  _cumulate(arg0) {
    self = this;
    if (this.n !== this.last_cumulate) {
      tmp = global;
      if (!global) {
        if (self.CX) {
        }
      }
      num = 0;
      closure_0 = 0;
      centroids = self.centroids;
      eachResult = centroids.each((arg0) => {
        arg0.mean_cumn = closure_0 + arg0.n / 2;
        const sum = closure_0 + arg0.n;
        arg0.cumn = sum;
        closure_0 = sum;
      });
      tmp3 = closure_0;
      self.last_cumulate = closure_0;
      self.n = closure_0;
    }
    return;
  }
  find_nearest(arg0) {
    self = this;
    if (0 === this.size()) {
      tmp6 = null;
      return null;
    } else {
      centroids = self.centroids;
      obj = {};
      obj.mean = global;
      lowerBoundResult = centroids.lowerBound(obj);
      tmp7 = null;
      if (null === lowerBoundResult.data()) {
        prevResult = lowerBoundResult.prev();
      } else {
        prevResult = lowerBoundResult.data();
      }
      if (prevResult.mean !== global) {
        if (!self.discrete) {
          prevResult1 = lowerBoundResult.prev();
          tmp3 = prevResult;
          if (prevResult1) {
            tmp4 = globalThis;
            _Math = Math;
            _Math2 = Math;
            absolute = Math.abs(prevResult1.mean - global);
            tmp3 = prevResult;
            if (absolute < Math.abs(prevResult.mean - global)) {
              tmp3 = prevResult1;
            }
          }
          return tmp3;
        }
      }
      return prevResult;
    }
  }
  _new_centroid(arg0, arg1, arg2) {
    obj = { mean: global, n: require, cumn: importDefault };
    centroids = this.centroids;
    insertResult = centroids.insert(obj);
    this.n = this.n + require;
    return obj;
  }
  _addweight(arg0, arg1, arg2) {
    self = this;
    if (require !== global.mean) {
      global.mean = global.mean + importDefault * (require - global.mean) / (global.n + importDefault);
    }
    global.cumn = global.cumn + importDefault;
    global.mean_cumn = global.mean_cumn + importDefault / 2;
    global.n = global.n + importDefault;
    self.n = self.n + importDefault;
    return;
  }
  _digest(arg0, arg1) {
    self = this;
    ({ centroids, centroids: centroids2 } = this);
    minResult = centroids.min();
    maxResult = centroids2.max();
    find_nearestResult = this.find_nearest(global);
    if (find_nearestResult) {
      if (find_nearestResult.mean === global) {
        _addweightResult = self._addweight(find_nearestResult, global, require);
      }
      flag = false;
      _cumulateResult = self._cumulate(false);
      tmp13 = !self.discrete && self.K && self.size() > self.K / self.delta;
      if (tmp13) {
        compressResult = self.compress();
      }
      return;
    }
    if (find_nearestResult === minResult) {
      num3 = 0;
      _new_centroidResult = self._new_centroid(global, require, 0);
    } else if (find_nearestResult === maxResult) {
      _new_centroidResult1 = self._new_centroid(global, require, self.n);
    } else if (self.discrete) {
      _new_centroidResult2 = self._new_centroid(global, require, find_nearestResult.cumn);
    } else {
      result = find_nearestResult.mean_cumn / self.n;
      tmp5 = globalThis;
      _Math = Math;
      num = 4;
      num2 = 1;
      if (Math.floor(4 * self.n * self.delta * result * (1 - result)) - find_nearestResult.n >= require) {
        _addweightResult1 = self._addweight(find_nearestResult, global, require);
      } else {
        _new_centroidResult3 = self._new_centroid(global, require, find_nearestResult.cumn);
      }
    }
    return;
  }
  bound_mean(arg0) {
    centroids = this.centroids;
    obj = { mean: global };
    iter = centroids.upperBound(obj);
    prevResult = iter.prev();
    items = [, ];
    items[0] = prevResult;
    if (prevResult.mean !== global) {
      prevResult = iter.next();
    }
    items[1] = prevResult;
    return items;
  }
  p_rank(arg0) {
    self = this;
    arr = global;
    if (!Array.isArray(global)) {
      items = [];
      items[0] = global;
      arr = items;
    }
    mapped = arr.map(self._p_rank, self);
    first = mapped;
    if (!Array.isArray(global)) {
      num = 0;
      first = mapped[0];
    }
    return first;
  }
  _p_rank(arg0) {
    self = this;
    if (0 !== this.size()) {
      centroids = self.centroids;
      if (global < centroids.min().mean) {
        return 0;
      } else {
        centroids2 = self.centroids;
        if (global > centroids2.max().mean) {
          num = 1;
          return 1;
        } else {
          flag = true;
          _cumulateResult = self._cumulate(true);
          bound_meanResult = self.bound_mean(global);
          first = bound_meanResult[0];
          num2 = 1;
          tmp5 = bound_meanResult[1];
          if (self.discrete) {
            return first.cumn / self.n;
          } else {
            mean_cumn = first.mean_cumn;
            sum = mean_cumn;
            if (first !== tmp5) {
              sum = mean_cumn + (global - first.mean) * (tmp5.mean_cumn - first.mean_cumn) / (tmp5.mean - first.mean);
            }
            return sum / self.n;
          }
        }
      }
    } else {
      return;
    }
  }
  bound_mean_cumn(arg0) {
    this.centroids._comparator = compare_centroid_mean_cumns;
    centroids = this.centroids;
    obj = { mean_cumn: global };
    iter = centroids.upperBound(obj);
    this.centroids._comparator = compare_centroid_means;
    prevResult = iter.prev();
    items = [, ];
    items[0] = prevResult;
    if (!prevResult) {
      prevResult = iter.next();
    }
    items[1] = prevResult;
    return items;
  }
  percentile(arg0) {
    self = this;
    arr = global;
    if (!Array.isArray(global)) {
      items = [];
      items[0] = global;
      arr = items;
    }
    mapped = arr.map(self._percentile, self);
    first = mapped;
    if (!Array.isArray(global)) {
      num = 0;
      first = mapped[0];
    }
    return first;
  }
  _percentile(arg0) {
    self = this;
    if (0 !== this.size()) {
      flag = true;
      _cumulateResult = self._cumulate(true);
      centroids = self.centroids;
      minResult = centroids.min();
      centroids2 = self.centroids;
      maxResult = centroids2.max();
      tmp4 = global;
      result = self.n * global;
      bound_mean_cumnResult = self.bound_mean_cumn(result);
      first = bound_mean_cumnResult[0];
      num = 1;
      tmp8 = bound_mean_cumnResult[1];
      if (tmp8 !== first) {
        tmp9 = null;
        if (null !== first) {
          if (null !== tmp8) {
            if (self.discrete) {
              tmp10 = result <= first.cumn ? first.mean : tmp8.mean;
            } else {
              mean = first.mean + (result - first.mean_cumn) * (tmp8.mean - first.mean) / (tmp8.mean_cumn - first.mean_cumn);
            }
          }
          return mean;
        }
      }
      if (!first) {
        first = tmp8;
      }
      mean = first.mean;
    } else {
      return;
    }
    return;
  }
  compress() {
    self = this;
    if (!this.compressing) {
      toArrayResult = self.toArray();
      resetResult = self.reset();
      flag = true;
      self.compressing = true;
      tmp2 = globalThis;
      num = 1;
      num2 = 0;
      if (toArrayResult.length > 0) {
        do {
          _Math = Math;
          _Math2 = Math;
          push_centroidResult = self.push_centroid(toArrayResult.splice(Math.floor(Math.random() * toArrayResult.length), 1)[0]);
          length = toArrayResult.length;
        } while (length > 0);
      }
      _cumulateResult = self._cumulate(true);
      flag2 = false;
      self.compressing = false;
    }
    return;
  }
}
function compare_centroid_means(mean, mean2) {
  let num = 1;
  if (mean.mean <= mean2.mean) {
    let num2 = 0;
    if (mean.mean < mean2.mean) {
      num2 = -1;
    }
    num = num2;
  }
  return num;
}
function compare_centroid_mean_cumns(mean_cumn, mean_cumn2) {
  return mean_cumn.mean_cumn - mean_cumn2.mean_cumn;
}
class Digest {
  constructor(arg0) {
    self = this;
    obj = global;
    if (!global) {
      obj = {};
    }
    self.config = obj;
    self.mode = self.config.mode || "auto";
    delta = "cont" === self.mode;
    tmp = TDigest;
    if (delta) {
      delta = global.delta;
    }
    callResult = TDigest.call(self, delta);
    self.digest_ratio = self.config.ratio || 0.9;
    self.digest_thresh = self.config.thresh || 1000;
    self.n_unique = 0;
    return;
  }
  push(arg0) {
    push = TDigest.prototype.push;
    callResult = push.call(this, global);
    check_continuousResult = this.check_continuous();
    return;
  }
  _new_centroid(arg0, arg1, arg2) {
    this.n_unique = this.n_unique + 1;
    _new_centroid = TDigest.prototype._new_centroid;
    callResult = _new_centroid.call(this, global, require, importDefault);
    return;
  }
  _addweight(arg0, arg1, arg2) {
    self = this;
    if (1 === global.n) {
      self.n_unique = self.n_unique - 1;
    }
    _addweight = TDigest.prototype._addweight;
    callResult = _addweight.call(self, global, require, importDefault);
    return;
  }
  check_continuous() {
    self = this;
    tmp = "auto" !== this.mode || self.size() < self.digest_thresh;
    tmp2 = !tmp;
    if (!tmp) {
      flag = self.n_unique / self.size() > self.digest_ratio;
      if (flag) {
        str = "cont";
        self.mode = "cont";
        flag2 = false;
        self.discrete = false;
        self.delta = self.config.delta || 0.01;
        compressResult = self.compress();
        flag = true;
      }
      tmp2 = flag;
    }
    return tmp2;
  }
}
Digest.prototype = Object.create(TDigest.prototype);
Digest.prototype.constructor = Digest;

export default { TDigest, Digest };
