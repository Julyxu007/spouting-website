// 简单的表单提交拦截，等以后加后台功能
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.quote-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you! Your request has been simulated. (Prototype only)');
        });
    }
});