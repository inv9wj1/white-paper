let filename = 'sysshr.zoops.dgs';

// Find the index of the first period
let firstPeriodIndex = filename.indexOf('.');

// Check if a period is found
if (firstPeriodIndex !== -1) {
  // Extract the substring after the first period
  let truncatedFilename = filename.substring(firstPeriodIndex + 1);

  console.log(truncatedFilename);
} else {
  // If no period is found, keep the original filename
  console.log(filename);
}
