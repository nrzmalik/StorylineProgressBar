function createProgressBar(maximumProgress, currentProgress, color = '#97BE5A', targetDivIdentifier) {
    const targetDivSelector = `[data-acc-text="${targetDivIdentifier}"]`;
    let targetDiv = document.querySelector(targetDivSelector);
    if (!targetDiv) {
        console.error("Target div not found");
        return;
    }
    
    targetDiv.innerHTML = '';
    const progressBarContainer = document.createElement('div');
    progressBarContainer.style.position = 'relative';
    progressBarContainer.style.width = '100%';
    progressBarContainer.style.height = '100%';
    progressBarContainer.style.backgroundColor = '#e0e0e0';
    progressBarContainer.style.borderRadius = '5px';
    progressBarContainer.style.overflow = 'hidden';
    progressBarContainer.dataset.maximumProgress = maximumProgress;
    progressBarContainer.dataset.targetDiv = targetDivIdentifier;

    const progressBar = document.createElement('div');
    progressBar.style.height = '100%';
    progressBar.style.width = '0%';
    progressBar.style.backgroundColor = color;
    progressBar.style.transition = 'width 0.5s ease';

    progressBarContainer.appendChild(progressBar);
    targetDiv.appendChild(progressBarContainer);

    updateProgressBar(currentProgress, targetDivIdentifier);
}

function updateProgressBar(currentProgress, targetDivIdentifier) {
    const targetDivSelector = `[data-acc-text="${targetDivIdentifier}"]`;
    let targetDiv = document.querySelector(targetDivSelector);
    if (!targetDiv) {
        console.error("Target div not found");
        return;
    }
    
    const progressBarContainer = targetDiv.querySelector('div');
    if (progressBarContainer) {
        const maximumProgress = progressBarContainer.dataset.maximumProgress;
        const progressBar = progressBarContainer.querySelector('div');
        if (progressBar) {
            const progressPercentage = (currentProgress / maximumProgress) * 100;
            progressBar.style.width = `${progressPercentage}%`;
        }
    }
}


