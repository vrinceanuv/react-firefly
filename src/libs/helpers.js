export const updateTab = (list, updatedTab) => {
  const updatedIndex = list.findIndex(item => item.id === updatedTab.id)

  return [
    ...list.slice(0, updatedIndex),
    updatedTab,
    ...list.slice(updatedIndex + 1)
  ]
}
