import { Given, When, Then } from 'cucumber'
import todoActions from '../actions/todoActions'


Given(/^User opens the TODO homepage/, { timeout: 30000 }, async function () {
    await todoActions.visitUrl(this.page);
});

Then( /^User adds new TODO Item with name "([^"]*)"$/, async function(newTodoItem){
    await todoActions.addTodoItem(this.page, newTodoItem);
});

Then(/^User verifies the TODO item has been added with name "([^"]*)"$/, async function(todoItem){
    await todoActions.verifyAddedItem(this.page, todoItem)
});

Then(/^User marks the TODO item "([^"]*)" completed$/, async function(todoItem){
    await todoActions.markTodoItemComplete(this.page, todoItem)
});

Then(/^User switches to "([^"]*)" tab$/, async function(tab){
    await todoActions.switchToTab(this.page, tab)
});

Then(/^User verifies the TODO Item "([^"]*)" is marked completed$/, async function(todoItem){
    await todoActions.verifyCompletedTodoItem(this.page, todoItem)
});

Then(/^User deletes the TODO Item with name "([^"]*)"$/, async function (todoItem) {
    await todoActions.deleteTodoItem(this.page, todoItem)
});

Then(/^User verifies the TODO Item "([^"]*)" is deleted$/, async function(todoItem){
    await todoActions.verifyDelete(this.page, todoItem)
});

Then(/^User presses Clear completed/, async function(){
   await todoActions.clearCompleted(this.page)
});

Then(/^User verifies the counter is changed to "([^"]*)"$/, async function(count){
    await todoActions.verifyCounterUpdate(this.page, count)
});

Then(/^User edits the TODO Item "([^"]*)" to "([^"]*)"/, async function(itemToEdit, updatedItem){
    await todoActions.editItem(this.page, itemToEdit, updatedItem)
});

Then(/^User verifies the TODO item has been updated to "([^"]*)"/, async function(editedItem){
    await todoActions.verifyAddedItem(this.page, editedItem)
});
