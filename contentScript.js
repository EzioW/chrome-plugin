const mergeButton = document.getElementsByClassName('accept-merge-request')[0];

const commitNums = document
  .getElementsByClassName('commits-tab')[0]
  ?.getElementsByClassName('badge')[0]?.textContent;

if (mergeButton && Number(commitNums) !== 1) {
  mergeButton.setAttribute('disabled', true);
}
