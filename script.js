
document.getElementById("applicationForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const inputs = this.querySelectorAll("input, select");
    let data = {
        fullName: inputs[0].value + " " + inputs[1].value,
        email: inputs[2].value,
        phone: inputs[3].value,
        nin: inputs[4].value,
        institutionType: inputs[5].value,
        school: inputs[6].value,
        course: inputs[7].value,
        level: inputs[8].value,
        palmpay: inputs[9].value
    };

    let applications = JSON.parse(localStorage.getItem("svcg_applications")) || [];
    applications.push(data);
    localStorage.setItem("svcg_applications", JSON.stringify(applications));

    document.getElementById("successMessage").classList.remove("hidden");
    this.reset();
});
