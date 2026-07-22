// Module ID: 9656
// Function ID: 75230
// Dependencies: []

// Module 9656
const AnalyticEvents = require(dependencyMap[0]).AnalyticEvents;
const _module = require(dependencyMap[1]);
let closure_4 = _module.create(() => ({}));
const _module1 = require(dependencyMap[6]);
const result = _module1.fileFinishedImporting("modules/device/native/DeviceMedia.tsx");

export default {
  getNextAssetPage(arg0) {
    let batchSize;
    let extensions;
    let closure_2;
    ({ batchSize, extensions } = arg0);
    const state = state.getState();
    const assets = state.assets;
    const require = assets;
    const lastAssetIndex = state.lastAssetIndex;
    const importDefault = lastAssetIndex;
    if (null != assets) {
      if (!state.hasReachedEnd) {
        if (null != assets.edges[assets.edges.length - 1]) {
          const node = tmp4.node;
          if (null != node) {
            const image = node.image;
          }
        }
        let obj = require(closure_2[5]);
        if (!obj.isIOS()) {
          closure_2 = tmp2 + 1;
          obj = {
            batchSize,
            endCursor: tmp3,
            lastAssetIndex,
            lastNodeImageUri: image.uri,
            extensions,
            onFetched(edges) {
                    function applyStateUpdate(edges) {
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
                      const callback = callback + num;
                      if (null != edges) {
                        let tmp3 = null == edges;
                        if (!tmp3) {
                          edges = edges.edges;
                          tmp3 = null == edges;
                        }
                        if (!tmp3) {
                          const unshift = arr2.unshift;
                          const items = [];
                          HermesBuiltin.arraySpread(edges.edges, 0);
                          HermesBuiltin.apply(items, arr2);
                        }
                      }
                      let obj = edges(tmp12[3]);
                      obj.batchUpdates(() => {
                        const obj = { assets: arg0, page: tmp12, lastAssetIndex: closure_1 };
                        let end_cursor;
                        if (null != arg0) {
                          const page_info = arg0.page_info;
                          if (null != page_info) {
                            end_cursor = page_info.end_cursor;
                          }
                        }
                        obj.endCursor = end_cursor;
                        store.setState(obj);
                      });
                      let tmp12 = null == edges || 0 === edges.edges.length;
                      if (!tmp12) {
                        const page_info = edges.page_info;
                        let has_next_page;
                        if (null != page_info) {
                          has_next_page = page_info.has_next_page;
                        }
                        tmp12 = false === has_next_page;
                      }
                      if (tmp12) {
                        edges(tmp12[3]).batchUpdates(() => store.setState({ hasReachedEnd: tmp12 }));
                        const obj2 = edges(tmp12[3]);
                      }
                      obj = { page: tmp12, has_reached_end: tmp12 };
                      callback(tmp12[2]).track(constants.MEDIA_PICKER_INFINITE_SCROLL_PAGED, obj);
                    }(edges);
                  }
          };
          importDefault(closure_2[4])(obj);
        }
      }
    }
  },
  refreshAssets(batchSize) {
    batchSize = batchSize.batchSize;
    const require = batchSize;
    importDefault(dependencyMap[4])({
      batchSize,
      extensions: batchSize.extensions,
      onFetched(edges) {
        function applyStateUpdate(edges) {
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
            let obj = callback(closure_2[2]);
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
            obj.track(constants.MEDIA_PICKER_ASSETS_DEBUG, obj);
          }
          edges(closure_2[3]).batchUpdates(() => {
            const obj = { assets: arg0, page: 0, lastAssetIndex: arg0 };
            let end_cursor;
            if (null != arg0) {
              const page_info = arg0.page_info;
              if (null != page_info) {
                end_cursor = page_info.end_cursor;
              }
            }
            obj.endCursor = end_cursor;
            let has_next_page;
            if (null != arg0) {
              const page_info2 = arg0.page_info;
              if (null != page_info2) {
                has_next_page = page_info2.has_next_page;
              }
            }
            obj.hasReachedEnd = !(null == has_next_page || has_next_page);
            state.setState(obj);
          });
        }(edges);
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
