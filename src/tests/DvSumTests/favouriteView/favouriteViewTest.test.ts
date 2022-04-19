import { test, expect } from '@playwright/test';
import { setUpDvSum,checkEditSetting } from '../../../pages/DvSumPages/basePageFolder/basePage';
import { favouriteView } from '../../../pages/DvSumPages/columnDirecFolder/columnDirecPage';
import { editView } from '../../../pages/DvSumPages/editViewFolder/editViewPage';


  test('favourite a view in DvSum', async ({ page })=>{
    await setUpDvSum(page);
    await favouriteView(page);
  });
  