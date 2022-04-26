import { expect, Page } from  '@playwright/test';
import {baseUrl,emailfield,passwordfield,password,username,signInButton,newSavedname,arrayOfNames,refreshButton} from './basePageTargets'

export async function setUpDvSum(page:Page){
    
    await page.goto(baseUrl);
    await page.type(emailfield,username);
    await page.type(passwordfield,password);
    await page.click(signInButton);
 }

 export async function checkEditSetting(page:Page, selectedNamesForLocators){
    await page.click(refreshButton);
    var newViewName= selectedNamesForLocators[0];
    await expect(await (await page.locator(newSavedname).textContent()).toString().trim()).toEqual(newViewName);
    console.log("seen name, it is same");
    
    var extractedArrayOfNames= await (await page.$(arrayOfNames)).innerText();

    console.log(extractedArrayOfNames);
    console.log ("yeap");
    var arrayOfSelectionForComparison=[];
    arrayOfSelectionForComparison=extractedArrayOfNames.split(/\n/);
     for (var i=1; i<=selectedNamesForLocators.length-1; i++)
    {  

      //   var variableName:string=selectedNamesForLocators[i];
      //   variableName=variableName.trim();
      //   (await element).scrollIntoViewIfNeeded();
      //   var element = page.$('//div[@col-id="'+variableName+'"and @role="presentation"]');
      //   (await element).scrollIntoViewIfNeeded();
      //   console.log(variableName+ " exists!");
      //   page.evaluate
      //   await expect(page.locator('//div[@col-id="'+variableName+'"and @role="presentation"]')).toBeVisible();
    }
 }

 export async function checkDeletedList (page:Page, selectorForDeletedItem)
 {
    await page.click(refreshButton);
    await expect (page.$(selectorForDeletedItem)).toBeNull;
 } 
