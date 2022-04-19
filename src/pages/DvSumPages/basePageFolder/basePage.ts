import { expect, Page } from  '@playwright/test';
import {baseUrl,emailfield,passwordfield,password,username,signInButton,newSavedname} from './basePageTargets'

export async function setUpDvSum(page:Page){
    
    await page.goto(baseUrl);
    await page.type(emailfield,username);
    await page.type(passwordfield,password);
    await page.click(signInButton);
 }

 export async function checkEditSetting(page:Page, selectedNamesForLocators){
    var newViewName= selectedNamesForLocators[0];
    await expect(await (await page.locator(newSavedname).textContent()).toString().trim()).toEqual(newViewName);
    console.log("seen name, it is same");
    for (var i=1; i<=selectedNamesForLocators.length-1; i++)
    {
        var variableName:string=selectedNamesForLocators[i];
        variableName=variableName.trim();
        var element = page.$('//div[@col-id="'+variableName+'"and @role="presentation"]');
        console.log(variableName+ " exists!");
        

        (await element).scrollIntoViewIfNeeded();
        await expect(page.locator('//div[@col-id="'+variableName+'"and @role="presentation"]')).toBeVisible();
    }
 }
