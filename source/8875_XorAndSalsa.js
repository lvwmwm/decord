// Module ID: 8875
// Function ID: 69967
// Name: XorAndSalsa
// Dependencies: []
// Exports: scrypt, scryptAsync

// Module 8875 (XorAndSalsa)
function XorAndSalsa(arg0, arg1, arg2, arg3, arg4, arg5) {
  let tmp81;
  let tmp82;
  let tmp83;
  let tmp84;
  let tmp85;
  let tmp86;
  let tmp87;
  let tmp88;
  let tmp89;
  let tmp90;
  let tmp91;
  let tmp92;
  let tmp93;
  let tmp94;
  let tmp95;
  let tmp96;
  let tmp = +arg1;
  let tmp47 = tmp3;
  let tmp48 = tmp6;
  let tmp49 = tmp9;
  let tmp50 = tmp12;
  let tmp51 = tmp15;
  let tmp52 = tmp18;
  let tmp53 = tmp21;
  let tmp54 = tmp24;
  let tmp55 = tmp27;
  let tmp56 = tmp30;
  let tmp57 = tmp33;
  let tmp58 = tmp36;
  let tmp59 = tmp39;
  let tmp60 = tmp42;
  let tmp61 = tmp45;
  let tmp62 = tmp46;
  let num = 0;
  do {
    let tmp63 = closure_0;
    let tmp64 = closure_1;
    let tmp65 = tmp51 ^ closure_0(closure_1[1]).rotl(tmp47 + tmp59 | 0, 7);
    let tmp66 = tmp55 ^ closure_0(closure_1[1]).rotl(tmp65 + tmp47 | 0, 9);
    let tmp67 = tmp59 ^ closure_0(closure_1[1]).rotl(tmp66 + tmp65 | 0, 13);
    let tmp68 = tmp47 ^ closure_0(closure_1[1]).rotl(tmp67 + tmp66 | 0, 18);
    let tmp69 = tmp56 ^ closure_0(closure_1[1]).rotl(tmp52 + tmp48 | 0, 7);
    let tmp70 = tmp60 ^ closure_0(closure_1[1]).rotl(tmp69 + tmp52 | 0, 9);
    let tmp71 = tmp48 ^ closure_0(closure_1[1]).rotl(tmp70 + tmp69 | 0, 13);
    let tmp72 = tmp52 ^ closure_0(closure_1[1]).rotl(tmp71 + tmp70 | 0, 18);
    let tmp73 = tmp61 ^ closure_0(closure_1[1]).rotl(tmp57 + tmp53 | 0, 7);
    let tmp74 = tmp49 ^ closure_0(closure_1[1]).rotl(tmp73 + tmp57 | 0, 9);
    let tmp75 = tmp53 ^ closure_0(closure_1[1]).rotl(tmp74 + tmp73 | 0, 13);
    let tmp76 = tmp57 ^ closure_0(closure_1[1]).rotl(tmp75 + tmp74 | 0, 18);
    let tmp77 = tmp50 ^ closure_0(closure_1[1]).rotl(tmp62 + tmp58 | 0, 7);
    let tmp78 = tmp54 ^ closure_0(closure_1[1]).rotl(tmp77 + tmp62 | 0, 9);
    let tmp79 = tmp58 ^ closure_0(closure_1[1]).rotl(tmp78 + tmp77 | 0, 13);
    let tmp80 = tmp62 ^ closure_0(closure_1[1]).rotl(tmp79 + tmp78 | 0, 18);
    tmp81 = tmp71 ^ closure_0(closure_1[1]).rotl(tmp68 + tmp77 | 0, 7);
    tmp82 = tmp74 ^ closure_0(closure_1[1]).rotl(tmp81 + tmp68 | 0, 9);
    tmp83 = tmp77 ^ closure_0(closure_1[1]).rotl(tmp82 + tmp81 | 0, 13);
    tmp84 = tmp68 ^ closure_0(closure_1[1]).rotl(tmp83 + tmp82 | 0, 18);
    tmp85 = tmp75 ^ closure_0(closure_1[1]).rotl(tmp72 + tmp65 | 0, 7);
    tmp86 = tmp78 ^ closure_0(closure_1[1]).rotl(tmp85 + tmp72 | 0, 9);
    tmp87 = tmp65 ^ closure_0(closure_1[1]).rotl(tmp86 + tmp85 | 0, 13);
    tmp88 = tmp72 ^ closure_0(closure_1[1]).rotl(tmp87 + tmp86 | 0, 18);
    tmp89 = tmp79 ^ closure_0(closure_1[1]).rotl(tmp76 + tmp69 | 0, 7);
    tmp90 = tmp66 ^ closure_0(closure_1[1]).rotl(tmp89 + tmp76 | 0, 9);
    tmp91 = tmp69 ^ closure_0(closure_1[1]).rotl(tmp90 + tmp89 | 0, 13);
    tmp92 = tmp76 ^ closure_0(closure_1[1]).rotl(tmp91 + tmp90 | 0, 18);
    tmp93 = tmp67 ^ closure_0(closure_1[1]).rotl(tmp80 + tmp73 | 0, 7);
    tmp94 = tmp70 ^ closure_0(closure_1[1]).rotl(tmp93 + tmp80 | 0, 9);
    tmp95 = tmp73 ^ closure_0(closure_1[1]).rotl(tmp94 + tmp93 | 0, 13);
    tmp96 = tmp80 ^ closure_0(closure_1[1]).rotl(tmp95 + tmp94 | 0, 18);
    num = num + 2;
    tmp47 = tmp84;
    tmp48 = tmp81;
    tmp49 = tmp82;
    tmp50 = tmp83;
    tmp51 = tmp87;
    tmp52 = tmp88;
    tmp53 = tmp85;
    tmp54 = tmp86;
    tmp55 = tmp90;
    tmp56 = tmp91;
    tmp57 = tmp92;
    tmp58 = tmp89;
    tmp59 = tmp93;
    tmp60 = tmp94;
    tmp61 = tmp95;
    tmp62 = tmp96;
  } while (num < 8);
  arg4[+arg5] = (arg0[tmp] ^ arg2[+arg3]) + tmp84 | 0;
  arg4[++arg5 + 1] = (arg0[+tmp + 1] ^ arg2[++arg3 + 1]) + tmp81 | 0;
  arg4[+++arg5 + 1 + 1] = (arg0[++tmp + 1 + 1] ^ arg2[+++arg3 + 1 + 1]) + tmp82 | 0;
  tmp = +tmp99 + 1;
  arg4[tmp] = (arg0[+++tmp + 1 + 1 + 1] ^ arg2[++++arg3 + 1 + 1 + 1]) + tmp83 | 0;
  tmp = +tmp + 1;
  arg4[tmp] = (arg0[++++tmp + 1 + 1 + 1 + 1] ^ arg2[+++++arg3 + 1 + 1 + 1 + 1]) + tmp87 | 0;
  tmp = +tmp + 1;
  arg4[tmp] = (arg0[+++++tmp + 1 + 1 + 1 + 1 + 1] ^ arg2[++++++arg3 + 1 + 1 + 1 + 1 + 1]) + tmp88 | 0;
  tmp = +tmp + 1;
  arg4[tmp] = (arg0[++++++tmp + 1 + 1 + 1 + 1 + 1 + 1] ^ arg2[+++++++arg3 + 1 + 1 + 1 + 1 + 1 + 1]) + tmp85 | 0;
  tmp = +tmp + 1;
  arg4[tmp] = (arg0[+++++++tmp + 1 + 1 + 1 + 1 + 1 + 1 + 1] ^ arg2[++++++++arg3 + 1 + 1 + 1 + 1 + 1 + 1 + 1]) + tmp86 | 0;
  tmp = +tmp + 1;
  arg4[tmp] = (arg0[++++++++tmp + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1] ^ arg2[+++++++++arg3 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1]) + tmp90 | 0;
  tmp = +tmp + 1;
  arg4[tmp] = (arg0[+++++++++tmp + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1] ^ arg2[++++++++++arg3 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1]) + tmp91 | 0;
  tmp = +tmp + 1;
  arg4[tmp] = (arg0[++++++++++tmp + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1] ^ arg2[+++++++++++arg3 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1]) + tmp92 | 0;
  tmp = +tmp + 1;
  arg4[tmp] = (arg0[+++++++++++tmp + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1] ^ arg2[++++++++++++arg3 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1]) + tmp89 | 0;
  tmp = +tmp + 1;
  arg4[tmp] = (arg0[++++++++++++tmp + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1] ^ arg2[+++++++++++++arg3 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1]) + tmp93 | 0;
  tmp = +tmp + 1;
  arg4[tmp] = (arg0[+++++++++++++tmp + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1] ^ arg2[++++++++++++++arg3 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1]) + tmp94 | 0;
  tmp = +tmp + 1;
  arg4[tmp] = (arg0[++++++++++++++tmp + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1] ^ arg2[+++++++++++++++arg3 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1]) + tmp95 | 0;
  arg4[+tmp + 1] = (arg0[+++++++++++++++tmp + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1] ^ arg2[++++++++++++++++arg3 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1]) + tmp96 | 0;
}
function BlockMix(V, arg1, B32, result, arg4) {
  let sum4 = arg1;
  let sum3 = result;
  let sum = result + 16 * arg4;
  let num = 0;
  do {
    B32[sum + num] = V[sum4 + 16 * (2 * arg4 - 1) + num];
    num = num + 1;
  } while (num < 16);
  let num2 = 0;
  if (0 < arg4) {
    do {
      let tmp4 = closure_3;
      let tmp5 = B32;
      let tmp6 = sum;
      let tmp7 = V;
      let tmp8 = sum4;
      let tmp9 = B32;
      let tmp10 = sum3;
      let tmp11 = closure_3(B32, sum, V, sum4, B32, sum3);
      let tmp12 = sum4;
      let tmp14 = sum;
      let sum1 = sum;
      let tmp13 = sum3;
      if (num2 > 0) {
        sum1 = sum + 16;
      }
      let tmp16 = closure_3;
      let sum2 = sum4 + 16;
      let tmp18 = B32;
      let tmp19 = sum3;
      let tmp20 = V;
      let tmp21 = sum2;
      let tmp22 = B32;
      let tmp23 = sum1;
      let tmp24 = closure_3(B32, tmp13, V, sum2, B32, sum1);
      num2 = num2 + 1;
      sum3 = sum3 + 16;
      sum4 = sum2 + 16;
      sum = sum1;
    } while (num2 < arg4);
  }
}
function scryptInit(B, B, arg2) {
  let N;
  let asyncTick;
  let dkLen;
  let maxmem;
  let onProgress;
  let p;
  let r;
  ({ N, r, p, dkLen, asyncTick, maxmem, onProgress } = require(dependencyMap[1]).checkOpts({}, arg2));
  const require = onProgress;
  require(dependencyMap[2]).number(N);
  require(dependencyMap[2]).number(r);
  require(dependencyMap[2]).number(p);
  require(dependencyMap[2]).number(dkLen);
  require(dependencyMap[2]).number(asyncTick);
  require(dependencyMap[2]).number(maxmem);
  if (undefined !== onProgress) {
    if ("function" !== typeof onProgress) {
      const _Error4 = Error;
      const error = new Error("progressCb should be function");
      throw error;
    }
  }
  const result = 128 * r;
  if (N > 1) {
    if (!(N & N - 1)) {
      if (N <= 4294967296) {
        if (p >= 0) {
          if (p <= 137438953440 / result) {
            if (dkLen >= 0) {
              if (dkLen <= 137438953440) {
                const result1 = result * (N + p);
                if (result1 > maxmem) {
                  const _Error = Error;
                  const _HermesInternal = HermesInternal;
                  const error1 = new Error("Scrypt: parameters too large, " + result1 + " (128 * r * (N + p)) > " + maxmem + " (maxmem)");
                  throw error1;
                } else {
                  let obj = { c: 1, dkLen: result * p };
                  const pbkdf2Result = require(dependencyMap[3]).pbkdf2(require(dependencyMap[4]).sha256, B, B, obj);
                  const _Uint8Array = Uint8Array;
                  const uint8Array = new Uint8Array(result * N);
                  const u32Result = require(dependencyMap[1]).u32(pbkdf2Result);
                  const _Uint8Array2 = Uint8Array;
                  const uint8Array1 = new Uint8Array(result);
                  function blockMixCb() {

                  }
                  const u32Result1 = require(dependencyMap[1]).u32(uint8Array);
                  if (onProgress) {
                    const result2 = 2 * N * p;
                    const dependencyMap = result2;
                    const _Math = Math;
                    const _Math2 = Math;
                    let closure_2 = Math.max(Math.floor(result2 / 10000), 1);
                    let closure_3 = 0;
                    blockMixCb = function blockMixCb() {
                      closure_3 = closure_3 + 1;
                      let tmp = !onProgress;
                      if (!tmp) {
                        let result = closure_3 % closure_2;
                        if (result) {
                          result = closure_3 !== result2;
                        }
                        tmp = result;
                      }
                      if (!tmp) {
                        onProgress(closure_3 / result2);
                      }
                    };
                  }
                  obj = { N, r, p, dkLen, blockSize32: result / 4, V: u32Result1, B32: u32Result, B: pbkdf2Result, tmp: require(dependencyMap[1]).u32(uint8Array1), blockMixCb, asyncTick };
                  return obj;
                }
              }
            }
            const _Error2 = Error;
            const error2 = new Error("Scrypt: dkLen should be positive integer less than or equal to (2^32 - 1) * 32");
            throw error2;
          }
        }
        const _Error3 = Error;
        const error3 = new Error("Scrypt: p must be a positive integer less than or equal to ((2^32 - 1) * 32) / (128 * r)");
        throw error3;
      }
    }
  }
  const error4 = new Error("Scrypt: N must be larger than 1, a power of 2, and less than 2^32");
  throw error4;
}
function scryptOutput(B, dkLen, B, V, arr3) {
  B.fill(0);
  V.fill(0);
  arr3.fill(0);
  return require(dependencyMap[3]).pbkdf2(require(dependencyMap[4]).sha256, B, B, { c: 1, dkLen });
}
function _scryptAsync() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _scryptAsync = obj;
  return obj(...arguments);
}
let closure_2 = require(dependencyMap[0]);

export const scrypt = function scrypt(B, B) {
  let B32;
  let N;
  let V;
  let blockMixCb;
  let blockSize32;
  let dkLen;
  let p;
  let r;
  let tmp2;
  ({ N, r, p, dkLen, blockSize32, V, B32, B, tmp: tmp2, blockMixCb } = scryptInit(B, B, arg2));
  if (!require(dependencyMap[1]).isLE) {
    require(dependencyMap[1]).byteSwap32(B32);
  }
  for (let num = 0; num < p; num = num + 1) {
    let result = blockSize32 * num;
    for (let num2 = 0; num2 < blockSize32; num2 = num2 + 1) {
      V[num2] = B32[result + num2];
    }
    let num3 = 0;
    let num4 = 0;
    if (0 < N - 1) {
      do {
        let tmp7 = closure_4;
        let sum = num4 + blockSize32;
        let tmp9 = V;
        let tmp10 = num4;
        let tmp11 = V;
        let tmp12 = sum;
        let tmp13 = r;
        let tmp14 = closure_4(V, num4, V, sum, r);
        let blockMixCbResult = blockMixCb();
        num3 = num3 + 1;
        num4 = sum;
        let diff = N - 1;
      } while (num3 < diff);
    }
    let tmp17 = BlockMix;
    let tmp18 = V;
    let tmp19 = B32;
    let tmp20 = result;
    let tmp21 = r;
    let tmp22 = BlockMix(V, (N - 1) * blockSize32, B32, result, r);
    let blockMixCbResult1 = blockMixCb();
    let num5 = 0;
    if (0 < N) {
      do {
        let result1 = B32[result + blockSize32 - 16] % N;
        let num6 = 0;
        let num7 = 0;
        if (0 < blockSize32) {
          do {
            tmp2[num6] = B32[result + num6] ^ V[result1 * blockSize32 + num6];
            num6 = num6 + 1;
            num7 = num6;
          } while (num6 < blockSize32);
        }
        let tmp25 = closure_4;
        let tmp26 = tmp2;
        let num8 = 0;
        let tmp27 = B32;
        let tmp28 = result;
        let tmp29 = r;
        let tmp30 = closure_4(tmp2, 0, B32, result, r);
        let blockMixCbResult2 = blockMixCb();
        num5 = num5 + 1;
        let tmp32 = num7;
        let tmp33 = result1;
      } while (num5 < N);
    }
  }
  if (!require(dependencyMap[1]).isLE) {
    require(dependencyMap[1]).byteSwap32(B32);
  }
  return scryptOutput(B, dkLen, B, V, tmp2);
};
export const scryptAsync = function scryptAsync(uint8Array, arg1, arg2) {
  return _scryptAsync(...arguments);
};
