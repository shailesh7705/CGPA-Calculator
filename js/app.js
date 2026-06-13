/**
 * CGPA Calculator — Application Logic
 * 
 * Core Logic (preserved from original):
 *   - Grade Points = Grade Value × Credits
 *   - CGPA = Total Grade Points / Total Credits
 *   - Grade values: 10 (90-100), 9 (80-89), 8 (70-79), 7 (60-69), 6 (50-59), 0 (0-49)
 *   - Users can add, delete individual courses, and clear all
 */

// ──────────────────────────────────────────
//  DOM Element References
// ──────────────────────────────────────────

const course = document.querySelector('.course');
const grade = document.querySelector('.grade');
const unit = document.querySelector('.unit');
const submit = document.querySelector('.submit');
const courses = document.querySelector('.courses');
const totalPoint = document.querySelector('.totalPoint');
const totalUnit = document.querySelector('.totalUnit');
const cgpa = document.querySelector('.gp');
const clear = document.querySelector('.clear');
const cgpaBar = document.getElementById('cgpa-bar');
const tableHeader = document.getElementById('table-header');
const coursesSection = document.getElementById('courses-section');

// ──────────────────────────────────────────
//  Toast Notification System
// ──────────────────────────────────────────

function showToast(message, type = 'warning') {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = `toast toast--${type}`;

    const icons = {
        warning: '⚠️',
        error: '❌',
        success: '✅'
    };

    toast.innerHTML = `
        <span class="toast__icon">${icons[type] || '⚠️'}</span>
        <span class="toast__message">${message}</span>
    `;

    container.appendChild(toast);

    // Trigger animation
    requestAnimationFrame(() => toast.classList.add('toast--visible'));

    // Auto-remove after 3 seconds
    setTimeout(() => {
        toast.classList.remove('toast--visible');
        toast.addEventListener('transitionend', () => toast.remove());
    }, 3000);
}

// ──────────────────────────────────────────
//  Grade Label Mapping
// ──────────────────────────────────────────

function getGradeLabel(value) {
    const labels = {
        '10': 'O',
        '9': 'A+',
        '8': 'A',
        '7': 'B+',
        '6': 'B',
        '0': 'F'
    };
    return labels[value] || value;
}

// ──────────────────────────────────────────
//  Update UI Visibility
// ──────────────────────────────────────────

function updateSectionVisibility() {
    const hasCourses = courses.children.length > 0;
    coursesSection.classList.toggle('courses-section--visible', hasCourses);
}

// ──────────────────────────────────────────
//  Update CGPA Bar
// ──────────────────────────────────────────

function updateCgpaBar() {
    const currentCgpa = parseFloat(cgpa.textContent) || 0;
    const percentage = (currentCgpa / 10) * 100;
    cgpaBar.style.width = `${Math.min(percentage, 100)}%`;
}

// ──────────────────────────────────────────
//  Add Course (Submit Button Click)
// ──────────────────────────────────────────

submit.addEventListener('click', () => {
    // Get input values
    const getCourseValue = course.value.trim();
    const unity = unit.value;
    const grady = grade.value;

    // ── Validation (same logic as original, toast instead of alert) ──
    if (getCourseValue === '' && grady === 'SELECT' && unity === 'SELECT') {
        showToast('Please enter course name, select marks and credits');
        return;
    } else if (getCourseValue === '' && grady === 'SELECT') {
        showToast('Please enter course name and select marks');
        return;
    } else if (getCourseValue === '' && unity === 'SELECT') {
        showToast('Please enter course name and select credits');
        return;
    } else if (grady === 'SELECT' && unity === 'SELECT') {
        showToast('Please select marks and credits');
        return;
    } else if (getCourseValue === '') {
        showToast('Please enter a course name');
        return;
    } else if (grady === 'SELECT') {
        showToast('Please select course marks');
        return;
    } else if (unity === 'SELECT') {
        showToast('Please select course credits');
        return;
    }

    // ── Add course row to list ──
    const gradeLabel = getGradeLabel(grady);
    const courseRow = document.createElement('div');
    courseRow.className = 'courseAdded slide-in';
    courseRow.innerHTML = `
        <div class="course-col course-col--name">
            <span class="course-name-text">${getCourseValue}</span>
        </div>
        <div class="course-col course-col--grade">
            <span class="grade-badge">${gradeLabel}</span>
        </div>
        <div class="course-col course-col--credits">
            <span class="creditpoint">${unity}</span>
        </div>
        <div class="course-col course-col--action">
            <button type="button" class="btn-delete del" aria-label="Remove course" data-grade="${grady}" data-credits="${unity}">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="3 6 5 6 21 6"></polyline>
                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                </svg>
            </button>
        </div>
    `;
    courses.appendChild(courseRow);

    // ── Update total grade points ──
    const calcVal = unity * grady;
    const convToN = Number(totalPoint.textContent);
    const getCalc = calcVal + convToN;
    totalPoint.textContent = getCalc;

    // ── Update total credits ──
    const totalUnitInnertext = Number(totalUnit.textContent);
    const unityText = Number(unity);
    const sumup = totalUnitInnertext + unityText;
    totalUnit.textContent = sumup;

    // ── Update CGPA ──
    const totalUnitToNumber = Number(totalUnit.textContent);
    const totalPointToNumber = Number(totalPoint.textContent);
    const averageGp = totalPointToNumber / totalUnitToNumber;
    cgpa.textContent = averageGp.toFixed(2);

    // ── Update CGPA progress bar ──
    updateCgpaBar();

    // ── Reset inputs ──
    course.value = '';
    grade.value = 'SELECT';
    unit.value = 'SELECT';

    // ── Show Clear All button ──
    clear.innerHTML = `<button class="btn btn--danger clearBtn" id="clear-all-btn">Clear All</button>`;

    // ── Update section visibility ──
    updateSectionVisibility();

    // ── Show success toast ──
    showToast(`"${getCourseValue}" added successfully`, 'success');

    // ── Focus back to course input ──
    course.focus();
});

// ──────────────────────────────────────────
//  Delete Course (Event Delegation)
// ──────────────────────────────────────────

courses.addEventListener('click', (e) => {
    const delBtn = e.target.closest('.del');
    if (!delBtn) return;

    const row = delBtn.closest('.courseAdded');
    const creditVal = Number(delBtn.dataset.credits);
    const gradeVal = Number(delBtn.dataset.grade);
    const gradePoints = creditVal * gradeVal;

    // Animate out
    row.classList.add('slide-out');
    row.addEventListener('animationend', () => {
        row.remove();

        // ── Update total credits ──
        const updateTotalUnit = Number(totalUnit.textContent) - creditVal;
        totalUnit.textContent = updateTotalUnit;

        // ── Update total grade points ──
        const updateTotalPoint = Number(totalPoint.textContent) - gradePoints;
        totalPoint.textContent = updateTotalPoint;

        // ── Update CGPA ──
        if (updateTotalUnit === 0) {
            cgpa.textContent = '0';
            clear.innerHTML = '';
        } else {
            cgpa.textContent = (updateTotalPoint / updateTotalUnit).toFixed(2);
        }

        // ── Update CGPA bar and visibility ──
        updateCgpaBar();
        updateSectionVisibility();
    });
});

// ──────────────────────────────────────────
//  Clear All (Event Delegation)
// ──────────────────────────────────────────

clear.addEventListener('click', (e) => {
    if (!e.target.classList.contains('clearBtn')) return;

    totalPoint.textContent = '0';
    totalUnit.textContent = '0';
    courses.innerHTML = '';
    cgpa.textContent = '0';
    clear.innerHTML = '';
    updateCgpaBar();
    updateSectionVisibility();
    showToast('All courses cleared', 'success');
});

// ──────────────────────────────────────────
//  Keyboard Support (Enter to Add)
// ──────────────────────────────────────────

document.getElementById('input-section').addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        e.preventDefault();
        submit.click();
    }
});

// ──────────────────────────────────────────
//  Page Load Animation
// ──────────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.container').classList.add('fade-in--active');
    updateSectionVisibility();
});
