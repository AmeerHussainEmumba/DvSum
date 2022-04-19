import { test, expect } from '@playwright/test';
import { setUpDvSum,checkEditSetting } from '../../../pages/DvSumPages/basePageFolder/basePage';
import { editColumn } from '../../../pages/DvSumPages/columnDirecFolder/columnDirecPage';
import { editView } from '../../../pages/DvSumPages/editViewFolder/editViewPage';


  test('Edit a view in DvSum', async ({ page })=>{
    let selectedNamesForLocators=[];
    await setUpDvSum(page);
    await editColumn(page);
    selectedNamesForLocators = await editView(page); 
    await checkEditSetting(page, selectedNamesForLocators);
  });
  