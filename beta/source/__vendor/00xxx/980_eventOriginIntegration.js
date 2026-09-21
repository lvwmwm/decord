// Module ID: 980
// Function ID: 981
// Name: eventOriginIntegration
// Dependencies: []
// Exports: eventOriginIntegration

// Module 980 (eventOriginIntegration)

export () => ({
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
})
