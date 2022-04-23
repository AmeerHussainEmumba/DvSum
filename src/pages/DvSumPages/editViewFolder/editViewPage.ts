import { expect, Page } from  '@playwright/test';
import{viewName,newViewName,deselectAll,criteriaDropDown,filterDropDown,saveButton,viewNameField,availableColumns,selectedColumns} from './editViewPageTargets'


export async function editView(page:Page){
    await page.click(viewNameField);
    await page.keyboard.press('Meta+A');
    await page.type(viewName, newViewName);
    await page.click(deselectAll);

    var totalNamesForLocators = []
    totalNamesForLocators= await page.$$eval(availableColumns, names => { return names.flatMap(names => (names as HTMLElement).innerText)});
    let selectedNamesForLocators=[];

    for (var i=0;i<=9;i++)
        {
            selectedNamesForLocators[i]=totalNamesForLocators[i];
            var variableName=selectedNamesForLocators[i];
            await page.dragAndDrop('//div[@class="colElement name" and contains (.,"'+variableName+'")]',selectedColumns);
        }
    await page.click(saveButton);
    console.log("save button clicked");
    selectedNamesForLocators.unshift(newViewName);    
    const dropDownForCriteria= await page.$(criteriaDropDown);
    await dropDownForCriteria.selectOption({index: 2});
    const dropDownForFilter = await page.$(filterDropDown);
    await dropDownForFilter.selectOption({index: 2});
    await page.click(saveButton);
    return selectedNamesForLocators;

}