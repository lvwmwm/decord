// Module ID: 1108
// Function ID: 1109
// Name: eventOriginIntegration
// Dependencies: []

// Module 1108 (eventOriginIntegration)
arg5.eventOriginIntegration = () => ({
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
});
