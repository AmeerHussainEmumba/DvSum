import { Page, expect } from  '@playwright/test';
import {dropDownMenu,dropDownSelectionForEditing,ctaButton,columnEditURL,editButton,deleteButton,dropDownSelectionForDeletion,finalDeleteButton,favouriteButton, viewFavouritedCheck,deletionIFrame} from  './columnDirecPageTargets'


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

    await page.click(deleteButton);
    
    var frameForDeleteOption= await page.frame({url: /about:blank/});
    await page.click(finalDeleteButton);
    return dropDownSelectionForDeletion;
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