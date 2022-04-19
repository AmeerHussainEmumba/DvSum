import { Page, expect } from  '@playwright/test';
import {dropDownMenu,dropDownSelectionForEditing,ctaButton,columnEditURL,editButton,deleteButton,dropDownSelectionForDeletion,finalDeleteButton,favouriteButton, viewFavouritedCheck} from  './columnDirecPageTargets'


export async function editColumn(page:Page){
    await page.goto(columnEditURL);
    await page.click(dropDownMenu);
    await page.click(dropDownSelectionForEditing);
    await page.click(ctaButton);
    await page.click(editButton);
}

export async function deleteView(page:Page){
    await page.goto(columnEditURL);
    await page.click(dropDownMenu);
    await page.click(dropDownSelectionForDeletion);
    await page.click(ctaButton);
    await page.waitForTimeout(3000);
    await page.click(deleteButton);
    
    
    //const frameForDeleteOption= await page.frame({url: "about:blank"});
    const locator= await page.frameLocator("//*[@id='mainBodyContainer']/iframe[2]").locator('//button[@class="btn btn-primary"]')
    
    await page.waitForTimeout(3000);
    await locator.click();
    //const finalDeletionButton= await frameForDeleteOption.$('//button[@class="btn btn-primary"]');
    //await finalDeletionButton.click();
}

export async function favouriteView(page:Page) {

    await page.goto(columnEditURL);
    await page.click(dropDownMenu);
    await page.click(dropDownSelectionForEditing);
    if (page.locator(viewFavouritedCheck).isVisible)
    {
        console.log("View is already favourited. Proceeding to un-favourite and favourite it agian.")
        await page.click(favouriteButton);
        await page.click(favouriteButton);
        
    }
    else
    {
        await page.click(favouriteButton);
    }
        
    
    await page.click(dropDownMenu);
    await expect(page.locator(viewFavouritedCheck)).toBeVisible();

}