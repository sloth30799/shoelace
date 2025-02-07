type SlExpandEvent = CustomEvent<Record<PropertyKey, never>>;

declare global {
  interface GlobalEventHandlersEventMap {
    'sl-expand': SlExpandEvent;
  }
}

export default SlExpandEvent;
