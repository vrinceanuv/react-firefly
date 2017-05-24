import {updateTab} from './helpers'

test('updateTab should update an item by id', () => {
  const startTabs = [
    {id:1, name: 'one', isComplete: false}
  ]
  const updatedTab = {id:2, name: 'two', isComplete: true}
  const expectedTabs = [
    {id:1, name: 'one', isComplete: false}
  ]

  const result = updateTab(startTabs, updatedTab)

  expect(result).toEqual(expectedTabs)
})

test('updateTab should not mutate the original array', () => {
  const startTabs = [
    {id:1, name: 'one', isComplete: false}
  ]
  const updatedTab = {id:2, name: 'two', isComplete: true}

  const result = updateTab(startTabs, updatedTab)

  expect(result).not.toBe(startTabs)
})
