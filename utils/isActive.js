// doc is active if it is being clicked or any of its child docs
export default function isActive(doc, currentSlug) {
  // is the current doc being clicked?
  if (doc.slug === currentSlug) {
    return true
  }
  // are any of its childran being click?
  return doc.children && doc.children.some((child) => isActive(child, currentSlug))
}
