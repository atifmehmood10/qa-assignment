
const {baseURL, activeURL, completeURL} = require('../utilities/support/constants');
import * as todoLocators from '../../locators/todoLocators.json';
import inputUtility from '../utilities/input';
import click_utility from '../utilities/click_utility';
import wait_utility from '../utilities/wait'
import { expect } from 'chai'

class TodoActions {
    async visitUrl(page) {
        await page.goto(baseURL, {waitUntil: 'domcontentloaded'})
    }

    async addTodoItem(page, newTodoItem){
        await inputUtility.enterText(page, todoLocators.TodoMVC.addTodoItem, newTodoItem)
        await page.keyboard.press('Enter')
    }

    async verifyAddedItem(page, todoItem){
        var todoItemXpath = `//label[contains(text(),"${todoItem}")]`
        await wait_utility.elementExistXpath(page, todoItemXpath)
    }

    async markTodoItemComplete(page, todoItem){
        var todoItemCompleteXpath = `//label[contains(text(),"${todoItem}")]/preceding-sibling::input`
        await click_utility.clickElementByXpath(page, todoItemCompleteXpath)
    }

    async verifyCompletedTodoItem(page, todoItem){
        var todoItemXpath = `//label[contains(text(),"${todoItem}")]`
        await wait_utility.elementExistXpath(page, todoItemXpath)
    }

    async switchToTab(page, tab){
        switch(tab){
            case 'All':
                await click_utility.clickElementByXpath(page, todoLocators.TodoMVC.allTodoItems)
                let urlAll = page.url()
                await expect(urlAll).to.be.a('string', baseURL)
                break
            case 'Active':
                await click_utility.clickElementByXpath(page, todoLocators.TodoMVC.activeTodoItems)
                let urlActive = page.url()
                await expect(urlActive).to.be.a('string', activeURL)
                break
            case 'Completed':
                await click_utility.clickElementByXpath(page, todoLocators.TodoMVC.completedTodoItems)
                let urlCompleted = page.url()
                await expect(urlCompleted).to.be.a('string', completeURL)
                break
        }
    }

    async deleteTodoItem(page, todoItem){
        var todoItemXpath = `//label[contains(text(),"${todoItem}")]`
        var todoItemDeleteXpath = `//label[contains(text(),"${todoItem}")]/following-sibling::button`
        await click_utility.clickElementByXpath(page, todoItemXpath)
        await click_utility.clickElementByXpath(page, todoItemDeleteXpath)
    }

    async verifyDelete(page, todoItem){
        var todoItemDeletedXpath = `//label[contains(text(),"${todoItem}")]`
        await wait_utility.elementNotExistXpath(page, todoItemDeletedXpath)
    }

    async clearCompleted(page){
        await click_utility.clickElement(page, todoLocators.TodoMVC.clearCompleted)
    }

    async verifyCounterUpdate(page, counter){
        let counterXpath = `//span[@class="todo-count"]/strong[contains(text(), '${counter}')]`
        await wait_utility.elementExistXpath(page, counterXpath)
    }

    async editItem(page, itemToEdit, editedItem){
        var todoItemXpath = `//label[contains(text(),"${itemToEdit}")]`
        await inputUtility.clearXPathInputField(page, todoItemXpath)
        await page.keyboard.type(editedItem)
        await page.keyboard.press('Enter')
        // await inputUtility.enterTextXpath(page, itemToEdit, editedItem)
    }x

}
export default new TodoActions()
