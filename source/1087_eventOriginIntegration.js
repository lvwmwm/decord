// Module ID: 1087
// Function ID: 12480
// Name: eventOriginIntegration
// Dependencies: []

// Module 1087 (eventOriginIntegration)
arg5.eventOriginIntegration = function eventOriginIntegration() {
  return {
    name: "EventOrigin",
    setupOnce() {

    },
    processEvent(tags) {
      tags = tags.tags;
      if (null === tags) {
        tags = {};
      }
      tags.tags = tags;
      tags.tags["event.origin"] = "javascript";
      tags.tags["event.environment"] = "javascript";
      return tags;
    }
  };
};
