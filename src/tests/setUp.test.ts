//example.spec.ts
import { test, expect } from '@playwright/test';
import {setUpDvSum} from '../pages/DvSumPages/basePageFolder/basePage';


test('Open DvSum Applciation and sign in', async ({ page })=>{
  console.log("Shouldnt had did that")
  await setUpDvSum(page)
});