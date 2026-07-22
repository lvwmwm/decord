// Module ID: 1448
// Function ID: 16881
// Dependencies: []

// Module 1448
let closure_0 = {
  map(arr) {
    let closure_0 = arg1;
    let closure_1 = {};
    if (arg1) {
      let mapped = arr.map((arg0, index) => {
        closure_1.index = index;
        return index.call(closure_1, arg0);
      });
    } else {
      mapped = arr.slice();
    }
    return mapped;
  },
  naturalOrder(result, closure_0) {
    let num = -1;
    if (result >= closure_0) {
      let num2 = 0;
      if (result > closure_0) {
        num2 = 1;
      }
      num = num2;
    }
    return num;
  },
  sum(arr) {
    let closure_0 = arg1;
    let closure_1 = {};
    return arr.reduce(arg1 ? (arg0, arg1, index) => {
      closure_1.index = index;
      return arg0 + arg1.call(closure_1, arg1);
    } : (arg0, arg1) => arg0 + arg1, 0);
  },
  max(arg0, arg1) {
    let mapped = arg0;
    if (arg1) {
      mapped = closure_0.map(arg0, arg1);
    }
    return max.apply(null, mapped);
  }
};

export default () => {
  function getColorIndex(arg0, arg1, arg2) {
    return (arg0 << 10) + (arg1 << 5) + arg2;
  }
  function PQueue(arg0) {
    const getColorIndex = arg0;
    function sort() {
      const sorted = arr.sort(arg0);
      let closure_2 = true;
    }
    let closure_1 = [];
    let closure_2 = false;
    return {
      push(arg0) {
        let closure_2 = false;
      },
      peek(arg0) {
        let diff = arg0;
        if (!closure_2) {
          sort();
        }
        if (undefined === diff) {
          diff = arr.length - 1;
        }
        return arr[diff];
      },
      pop() {
        if (!closure_2) {
          sort();
        }
        return arr.pop();
      },
      size() {
        return arr.length;
      },
      map(arg0) {
        return arr.map(arg0);
      },
      debug() {
        if (!closure_2) {
          sort();
        }
        return closure_1;
      }
    };
  }
  class VBox {
    constructor(arg0, arg1, arg2, arg3, arg4, arg5, arg6) {
      this.r1 = arg0;
      this.r2 = arg1;
      this.g1 = arg2;
      this.g2 = arg3;
      this.b1 = arg4;
      this.b2 = arg5;
      this.histo = arg6;
      return;
    }
  }
  class CMap {
    constructor() {
      tmp = new PQueue((vbox, vbox2) => {
        vbox = vbox.vbox;
        vbox2 = vbox.vbox;
        const vbox3 = vbox2.vbox;
        const result = vbox.count() * vbox2.volume();
        const vbox4 = vbox2.vbox;
        const countResult = vbox.count();
        return closure_0.naturalOrder(result, vbox3.count() * vbox4.volume());
      });
      this.vboxes = tmp;
      return;
    }
  }
  function medianCutApply(arg0, count) {
    let tmp42;
    if (count.count()) {
      let sum = count.r2 - count.r1 + 1;
      const sum1 = count.g2 - count.g1 + 1;
      const items = [sum, sum1, count.b2 - count.b1 + 1];
      const maxResult = getColorIndex.max(items);
      if (1 == count.count()) {
        const items1 = [count.copy()];
        return items1;
      } else {
        let getColorIndex = 0;
        const items2 = [];
        const items3 = [];
        const PQueue = items3;
        if (maxResult == sum) {
          sum = count.r1;
          let num11 = 0;
          let num6 = 0;
          while (sum <= count.r2) {
            let g13 = count.g1;
            let num12 = 0;
            let num13 = 0;
            while (g13 <= count.g2) {
              let b13 = count.b1;
              let sum2 = num12;
              let tmp20 = num12;
              let tmp21 = b13;
              if (b13 <= count.b2) {
                do {
                  let tmp22 = closure_0;
                  let num14 = arg0[closure_0(undefined, sum, g13, b13)];
                  let tmp23 = b13;
                  if (!num14) {
                    num14 = 0;
                  }
                  sum2 = sum2 + num14;
                  b13 = b13 + 1;
                  tmp20 = sum2;
                  tmp21 = b13;
                } while (b13 <= count.b2);
              }
              g13 = g13 + 1;
              let tmp24 = tmp21;
              num12 = tmp20;
              num13 = tmp20;
            }
            let sum3 = num11 + num13;
            getColorIndex = sum3;
            items2[sum] = sum3;
            sum = sum + 1;
            num11 = sum3;
            num6 = sum3;
          }
        } else if (maxResult == sum1) {
          let g12 = count.g1;
          let num7 = 0;
          num6 = 0;
          while (g12 <= count.g2) {
            let r1 = count.r1;
            let num8 = 0;
            let num9 = 0;
            while (r1 <= count.r2) {
              let b12 = count.b1;
              let sum4 = num8;
              let tmp13 = num8;
              let tmp14 = b12;
              if (b12 <= count.b2) {
                do {
                  let tmp15 = closure_0;
                  let num10 = arg0[closure_0(undefined, r1, g12, b12)];
                  let tmp16 = b12;
                  if (!num10) {
                    num10 = 0;
                  }
                  sum4 = sum4 + num10;
                  b12 = b12 + 1;
                  tmp13 = sum4;
                  tmp14 = b12;
                } while (b12 <= count.b2);
              }
              r1 = r1 + 1;
              let tmp17 = tmp14;
              num8 = tmp13;
              num9 = tmp13;
            }
            let sum5 = num7 + num9;
            getColorIndex = sum5;
            items2[g12] = sum5;
            g12 = g12 + 1;
            num7 = sum5;
            num6 = sum5;
          }
        } else {
          let b1 = count.b1;
          let num5 = 0;
          num6 = 0;
          while (b1 <= count.b2) {
            let sum7 = count.r1;
            let num2 = 0;
            let num3 = 0;
            while (sum7 <= count.r2) {
              let g1 = count.g1;
              let sum6 = num2;
              let tmp6 = num2;
              let tmp7 = g1;
              if (g1 <= count.g2) {
                do {
                  let tmp8 = closure_0;
                  let num4 = arg0[closure_0(undefined, sum7, g1, b1)];
                  let tmp9 = g1;
                  if (!num4) {
                    num4 = 0;
                  }
                  sum6 = sum6 + num4;
                  g1 = g1 + 1;
                  tmp6 = sum6;
                  tmp7 = g1;
                } while (g1 <= count.g2);
              }
              sum7 = sum7 + 1;
              let tmp10 = tmp7;
              num2 = tmp6;
              num3 = tmp6;
            }
            let sum8 = num5 + num3;
            getColorIndex = sum8;
            items2[b1] = sum8;
            b1 = b1 + 1;
            num5 = sum8;
            num6 = sum8;
          }
        }
        const item = items2.forEach((arg0, arg1) => {
          items3[arg1] = sum8 - arg0;
        });
        let str = "r";
        if (maxResult != sum) {
          let str2 = "b";
          if (maxResult == sum1) {
            str2 = "g";
          }
          str = str2;
        }
        const text = `${str}1`;
        const text1 = `${str}2`;
        let sum9 = count[`${str}1`];
        let tmp30;
        if (sum9 <= count[`${str}2`]) {
          while (items2[sum9] <= num6 / 2) {
            sum9 = sum9 + 1;
          }
          const copyResult = count.copy();
          const copyResult1 = count.copy();
          const diff = sum9 - count[text];
          const diff1 = count[text1] - sum9;
          if (diff <= diff1) {
            const _Math2 = Math;
            let bound = Math.min(count[text1] - 1, ~~sum9 + diff1 / 2);
          } else {
            const _Math = Math;
            bound = Math.max(count[text], ~~sum9 - 1 - diff / 2);
          }
          let tmp39 = bound;
          let tmp40 = bound;
          if (!items2[bound]) {
            do {
              let sum10 = tmp39 + 1;
              tmp39 = sum10;
              tmp40 = sum10;
              tmp42 = items2[sum10];
            } while (!tmp42);
          }
          let tmp43 = tmp40;
          if (!items3[tmp40]) {
            let tmp44 = tmp40;
            tmp43 = tmp40;
            if (items2[tmp40 - 1]) {
              const diff2 = tmp44 - 1;
              tmp43 = diff2;
              while (!items3[diff2]) {
                tmp44 = diff2;
                tmp43 = diff2;
                if (!items2[diff2 - 1]) {
                  break;
                }
              }
            }
          }
          copyResult[text1] = tmp43;
          copyResult1[text] = copyResult[text1] + 1;
          const items4 = [copyResult, copyResult1];
          tmp30 = items4;
        }
        return tmp30;
      }
    }
  }
  VBox.prototype = {
    volume(arg0) {
      const self = this;
      let _volume = this._volume;
      if (_volume) {
        _volume = !arg0;
      }
      if (!_volume) {
        self._volume = (self.r2 - self.r1 + 1) * (self.g2 - self.g1 + 1) * (self.b2 - self.b1 + 1);
      }
      return self._volume;
    },
    count(arg0) {
      const self = this;
      if (!this._count_set) {
        let sum1 = self.r1;
        let num = 0;
        let num2 = 0;
        while (sum1 <= self.r2) {
          let g1 = self.g1;
          let tmp3 = num;
          let tmp4 = num;
          if (g1 <= self.g2) {
            do {
              let b1 = self.b1;
              let sum = tmp3;
              let tmp6 = tmp3;
              let tmp7 = b1;
              if (b1 <= self.b2) {
                do {
                  let tmp8 = closure_0;
                  let num3 = tmp[closure_0(undefined, sum1, g1, b1)];
                  let tmp9 = b1;
                  if (!num3) {
                    num3 = 0;
                  }
                  sum = sum + num3;
                  b1 = b1 + 1;
                  tmp6 = sum;
                  tmp7 = b1;
                } while (b1 <= self.b2);
              }
              g1 = g1 + 1;
              let tmp10 = tmp7;
              tmp3 = tmp6;
              tmp4 = tmp6;
            } while (g1 <= self.g2);
          }
          sum1 = sum1 + 1;
          num = tmp4;
          num2 = tmp4;
        }
        self._count = num2;
        self._count_set = true;
      }
      return self._count;
    },
    copy() {
      return new VBox(this.r1, this.r2, this.g1, this.g2, this.b1, this.b2, this.histo);
    },
    avg(arg0) {
      const self = this;
      if (this._avg) {
        if (!arg0) {
          return self._avg;
        }
      }
      let sum4 = self.r1;
      let num = 0;
      let num2 = 0;
      let num3 = 0;
      let num4 = 0;
      let num5 = 0;
      let items = 0;
      let num6 = 0;
      let num7 = 0;
      while (sum4 <= self.r2) {
        let g1 = self.g1;
        let tmp3 = num;
        let tmp4 = num2;
        let tmp5 = num3;
        let tmp6 = num4;
        let tmp7 = num;
        let tmp8 = num2;
        let tmp9 = num3;
        let tmp10 = num4;
        if (g1 <= self.g2) {
          do {
            let b1 = self.b1;
            let sum = tmp3;
            let sum1 = tmp4;
            let sum2 = tmp5;
            let sum3 = tmp6;
            let tmp15 = tmp3;
            let tmp16 = tmp4;
            let tmp17 = tmp5;
            let tmp18 = tmp6;
            let tmp19 = b1;
            if (b1 <= self.b2) {
              do {
                let tmp20 = closure_0;
                let num8 = tmp[closure_0(undefined, sum4, g1, b1)];
                let tmp21 = b1;
                if (!num8) {
                  num8 = 0;
                }
                sum = sum + num8;
                sum1 = sum1 + num8 * (sum4 + 0.5) * 8;
                sum2 = sum2 + num8 * (g1 + 0.5) * 8;
                sum3 = sum3 + num8 * (b1 + 0.5) * 8;
                b1 = b1 + 1;
                tmp15 = sum;
                tmp16 = sum1;
                tmp17 = sum2;
                tmp18 = sum3;
                tmp19 = b1;
              } while (b1 <= self.b2);
            }
            g1 = g1 + 1;
            let tmp22 = tmp19;
            tmp3 = tmp15;
            tmp4 = tmp16;
            tmp5 = tmp17;
            tmp6 = tmp18;
            tmp7 = tmp15;
            tmp8 = tmp16;
            tmp9 = tmp17;
            tmp10 = tmp18;
          } while (g1 <= self.g2);
        }
        sum4 = sum4 + 1;
        num = tmp7;
        num2 = tmp8;
        num3 = tmp9;
        num4 = tmp10;
        num5 = tmp7;
        items = tmp8;
        num6 = tmp9;
        num7 = tmp10;
      }
      if (num5) {
        const result = items / num5;
        items = [~~result, , ];
        num6 = ~~num6 / num5;
        items[1] = num6;
        num7 = ~~num7 / num5;
        items[2] = num7;
        let items1 = items;
      } else {
        items1 = [~~8 * (self.r1 + self.r2 + 1) / 2, ~~8 * (self.g1 + self.g2 + 1) / 2, ~~8 * (self.b1 + self.b2 + 1) / 2];
      }
      self._avg = items1;
    },
    contains(arg0) {
      const self = this;
      globalThis.gval = arg0[1] >> 3;
      globalThis.bval = arg0[2] >> 3;
      let tmp2 = tmp >= this.r1 && tmp <= self.r2;
      if (tmp2) {
        tmp2 = globalThis.gval >= self.g1;
      }
      if (tmp2) {
        tmp2 = globalThis.gval <= self.g2;
      }
      if (tmp2) {
        tmp2 = globalThis.bval >= self.b1;
      }
      if (tmp2) {
        tmp2 = globalThis.bval <= self.b2;
      }
      return tmp2;
    }
  };
  CMap.prototype = {
    push(avg) {
      const vboxes = this.vboxes;
      vboxes.push({ vbox: avg, color: avg.avg() });
    },
    palette() {
      const vboxes = this.vboxes;
      return vboxes.map((color) => color.color);
    },
    size() {
      const vboxes = this.vboxes;
      return vboxes.size();
    },
    map(arg0) {
      const self = this;
      const vboxes = this.vboxes;
      let num = 0;
      if (0 < vboxes.size()) {
        const vbox = vboxes.peek(num).vbox;
        while (!vbox.contains(arg0)) {
          num = num + 1;
        }
        return vboxes.peek(num).color;
      }
      return self.nearest(arg0);
    },
    nearest(arg0) {
      const vboxes = this.vboxes;
      let num = 0;
      let tmp2;
      if (0 < vboxes.size()) {
        do {
          let _Math = Math;
          let _Math2 = Math;
          let _Math3 = Math;
          let powResult = Math.pow(arg0[0] - vboxes.peek(num).color[0], 2);
          let _Math4 = Math;
          let sum = powResult + Math.pow(arg0[1] - vboxes.peek(num).color[1], 2);
          let sqrtResult = Math.sqrt(sum + Math.pow(arg0[2] - vboxes.peek(num).color[2], 2));
          let tmp6 = sqrtResult < tmp;
          let tmp7 = num;
          if (!tmp6) {
            tmp6 = undefined === tmp;
          }
          if (tmp6) {
            let color = vboxes.peek(num).color;
            let tmp = sqrtResult;
          }
          num = num + 1;
          tmp2 = color;
        } while (num < vboxes.size());
      }
      return tmp2;
    },
    forcebw() {
      const vboxes = this.vboxes;
      const sorted = vboxes.sort((color, color2) => closure_0.naturalOrder(closure_0.sum(color.color), closure_0.sum(color2.color)));
      const color = vboxes[0].color;
      let tmp2 = color[0] < 5;
      if (tmp2) {
        tmp2 = color[1] < 5;
      }
      if (tmp2) {
        tmp2 = color[2] < 5;
      }
      if (tmp2) {
        vboxes[0].color = [];
      }
      const diff = vboxes.length - 1;
      const color2 = vboxes[diff].color;
      let tmp4 = color2[0] > 251 && color2[1] > 251;
      if (tmp4) {
        tmp4 = color2[2] > 251;
      }
      if (tmp4) {
        vboxes[diff].color = [null, null, null];
      }
    }
  };
  return {
    quantize(arr) {
      let sizeResult;
      let sizeResult1;
      function iter(arr3, arg1, arg2, arg3) {
        let tmp7;
        let tmp8;
        let num = 1;
        let num2 = 0;
        while (true) {
          let arr = arr3.pop();
          if (arr.count()) {
            let tmp4 = callback;
            let tmp5 = arr1;
            let tmp6 = callback(arr1, arr);
            [tmp7, tmp8] = tmp6;
            if (!tmp7) {
              break;
            } else {
              arr = arr3.push(tmp7);
              let sum = num;
              if (tmp8) {
                let arr1 = arr3.push(tmp8);
                sum = num + 1;
              }
              if (sum < arg1) {
                let tmp12 = +num2;
                let sum1 = tmp12 + 1;
                let tmp3 = sum;
                let tmp13 = tmp7;
                let tmp14 = tmp8;
              }
            }
          } else {
            let arr2 = arr3.push(arr);
            sum1 = num2 + 1;
            tmp3 = num;
          }
          num = tmp3;
          num2 = sum1;
        }
      }
      if (arr.length) {
        if (arg1 >= 2) {
          if (arg1 <= 256) {
            let arr1 = function getHisto(arr) {
              const array = new Array(32768);
              const item = arr.forEach((arg0) => {
                const callback = arg0[0] >> 3;
                let closure_1 = arg0[1] >> 3;
                const tmp = callback(callback, closure_1, arg0[2] >> 3);
                let num = array[tmp];
                if (!num) {
                  num = 0;
                }
                array[tmp] = num + 1;
              });
              return array;
            }(arr);
            const getColorIndex = arr1;
            const item = arr1.forEach(() => {

            });
            const prototype2 = PQueue.prototype;
            const arr3 = new PQueue((count, count2) => arr1.naturalOrder(count.count(), count2.count()));
            arr = arr3.push(function vboxFromPixels(arr, arr1) {
              let closure_3 = 1000000;
              let closure_4 = 0;
              let closure_5 = 1000000;
              let closure_6 = 0;
              let closure_7 = 1000000;
              let closure_8 = 0;
              const item = arr.forEach((arg0) => {
                let closure_0 = arg0[0] >> 3;
                let closure_1 = arg0[1] >> 3;
                let closure_2 = arg0[2] >> 3;
                if (closure_0 < closure_3) {
                  closure_3 = closure_0;
                } else if (closure_0 > closure_4) {
                  closure_4 = closure_0;
                }
                if (closure_1 < closure_5) {
                  closure_5 = closure_1;
                } else if (closure_1 > closure_6) {
                  closure_6 = closure_1;
                }
                if (closure_2 < closure_7) {
                  closure_7 = closure_2;
                } else if (closure_2 > closure_8) {
                  closure_8 = closure_2;
                }
              });
              return new closure_2(closure_3, closure_4, closure_5, closure_6, closure_7, closure_8, arr1);
            }(arr, arr1));
            iter(arr3, 0.75 * arg1);
            const prototype3 = PQueue.prototype;
            const arr4 = new PQueue((count, count2) => {
              const result = count.count() * count.volume();
              const countResult = count.count();
              return arr1.naturalOrder(result, count2.count() * count2.volume());
            });
            if (arr3.size()) {
              do {
                arr = arr4.push(arr3.pop());
                sizeResult = arr3.size();
              } while (sizeResult);
            }
            iter(arr4, arg1 - arr4.size());
            const prototype = CMap.prototype;
            arr = new CMap();
            if (arr4.size()) {
              do {
                arr1 = arr.push(arr4.pop());
                sizeResult1 = arr4.size();
              } while (sizeResult1);
            }
            return arr;
          }
        }
      }
      return false;
    }
  };
}().quantize;
