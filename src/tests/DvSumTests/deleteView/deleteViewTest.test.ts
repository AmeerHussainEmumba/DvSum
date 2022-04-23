import { test, expect } from '@playwright/test';
import { setUpDvSum,checkDeletedList } from '../../../pages/DvSumPages/basePageFolder/basePage';
import { deleteView,} from '../../../pages/DvSumPages/columnDirecFolder/columnDirecPage';


test('Delete a View in DvSum', async ({ page })=>{
    await setUpDvSum(page);
    var selectorForDeletedItem= await deleteView(page);
    await checkDeletedList(page, selectorForDeletedItem);
  });