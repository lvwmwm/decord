// Module ID: 1111
// Function ID: 1112
// Name: eventOriginIntegration
// Dependencies: []

// Module 1111 (eventOriginIntegration)
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
