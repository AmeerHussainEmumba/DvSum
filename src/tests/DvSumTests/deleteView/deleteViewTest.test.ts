import { test, expect } from '@playwright/test';
import { setUpDvSum,checkEditSetting } from '../../../pages/DvSumPages/basePageFolder/basePage';
import { deleteView, editColumn } from '../../../pages/DvSumPages/columnDirecFolder/columnDirecPage';


test('Delete a View in DvSum', async ({ page })=>{
    await setUpDvSum(page);
    await deleteView(page);
  });