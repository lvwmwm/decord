// Module ID: 9663
// Function ID: 75271
// Dependencies: [653, 621, 675, 682, 9664, 477, 2]

// Module 9663
import { AnalyticEvents } from "ME";
import keys from "keys";

let closure_4 = keys.create(() => ({ assets: null, page: 0, hasReachedEnd: false, lastAssetIndex: 0 }));
const result = require("expandLocation").fileFinishedImporting("modules/device/native/DeviceMedia.tsx");

export default {
  getNextAssetPage(arg0) {
    let batchSize;
    let extensions;
    let dependencyMap;
    ({ batchSize, extensions } = arg0);
    state = state.getState();
    const assets = state.assets;
    const lastAssetIndex = state.lastAssetIndex;
    if (null != assets) {
      if (!state.hasReachedEnd) {
        if (null != assets.edges[assets.edges.length - 1]) {
          const node = tmp4.node;
          if (null != node) {
            const image = node.image;
          }
        }
        let obj = assets(477);
        if (!obj.isIOS()) {
          dependencyMap = tmp2 + 1;
          obj = {
            batchSize,
            endCursor: tmp3,
            lastAssetIndex,
            lastNodeImageUri: image.uri,
            extensions,
            onFetched(edges) {
                    (function applyStateUpdate(edges) {
                      let closure_0 = edges;
                      let length;
                      if (null != edges) {
                        edges = edges.edges;
                        if (null != edges) {
                          length = edges.length;
                        }
                      }
                      let num = 0;
                      if (null != length) {
                        num = length;
                      }
                      let closure_1 = outer1_1 + num;
                      if (null != outer1_0) {
                        let tmp3 = null == edges;
                        if (!tmp3) {
                          edges = edges.edges;
                          tmp3 = null == edges;
                        }
                        if (!tmp3) {
                          const unshift = arr2.unshift;
                          const items = [];
                          HermesBuiltin.arraySpread(outer1_0.edges, 0);
                          HermesBuiltin.apply(items, arr2);
                        }
                      }
                      let obj = assets(682);
                      obj.batchUpdates(() => {
                        const obj = { assets: edges, page: outer2_2, lastAssetIndex: closure_1 };
                        let end_cursor;
                        if (null != edges) {
                          const page_info = edges.page_info;
                          if (null != page_info) {
                            end_cursor = page_info.end_cursor;
                          }
                        }
                        obj.endCursor = end_cursor;
                        outer3_4.setState(obj);
                      });
                      let tmp12 = null == edges || 0 === edges.edges.length;
                      if (!tmp12) {
                        let page_info = edges.page_info;
                        let has_next_page;
                        if (null != page_info) {
                          has_next_page = page_info.has_next_page;
                        }
                        tmp12 = false === has_next_page;
                      }
                      const dependencyMap = tmp12;
                      if (tmp12) {
                        assets(682).batchUpdates(() => outer3_4.setState({ hasReachedEnd: closure_2 }));
                        const obj2 = assets(682);
                      }
                      obj = { page: outer1_2, has_reached_end: tmp12 };
                      lastAssetIndex(675).track(outer2_3.MEDIA_PICKER_INFINITE_SCROLL_PAGED, obj);
                    })(edges);
                  }
          };
          lastAssetIndex(9664)(obj);
        }
      }
    }
  },
  refreshAssets(batchSize) {
    batchSize = batchSize.batchSize;
    importDefault(9664)({
      batchSize,
      extensions: batchSize.extensions,
      onFetched(edges) {
        (function applyStateUpdate(edges) {
          let closure_0 = edges;
          let length;
          if (null != edges) {
            edges = edges.edges;
            length = edges.filter((node) => {
              let uri;
              if (null != node) {
                node = node.node;
                if (null != node) {
                  const image = node.image;
                  if (null != image) {
                    uri = image.uri;
                  }
                }
              }
              let tmp2 = null == uri;
              if (!tmp2) {
                let uri1;
                if (null != node) {
                  const node2 = node.node;
                  if (null != node2) {
                    const image2 = node2.image;
                    if (null != image2) {
                      uri1 = image2.uri;
                    }
                  }
                }
                tmp2 = "" === uri1;
              }
              return tmp2;
            }).length;
          }
          let num = 0;
          if (null != length) {
            num = length;
          }
          if (num > 0) {
            let obj = outer2_1(outer2_2[2]);
            obj = { num_broken_assets: num };
            let length1;
            if (null != edges) {
              const edges1 = edges.edges;
              if (null != edges1) {
                length1 = edges1.length;
              }
            }
            obj.num_assets = length1;
            obj.location = "DeviceMedia.applyStateUpdate";
            obj.track(outer2_3.MEDIA_PICKER_ASSETS_DEBUG, obj);
          }
          batchSize(outer2_2[3]).batchUpdates(() => {
            const obj = { assets: edges, page: 0, lastAssetIndex: outer2_0 };
            let end_cursor;
            if (null != edges) {
              const page_info = edges.page_info;
              if (null != page_info) {
                end_cursor = page_info.end_cursor;
              }
            }
            obj.endCursor = end_cursor;
            let has_next_page;
            if (null != edges) {
              const page_info2 = edges.page_info;
              if (null != page_info2) {
                has_next_page = page_info2.has_next_page;
              }
            }
            obj.hasReachedEnd = !(null == has_next_page || has_next_page);
            outer3_4.setState(obj);
          });
        })(edges);
      }
    });
  },
  useAssets() {
    return state((assets) => assets.assets);
  },
  useHasReachedEnd() {
    return state((hasReachedEnd) => hasReachedEnd.hasReachedEnd);
  }
};
