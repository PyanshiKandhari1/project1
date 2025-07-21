# 💡 Project: CredCheck – Certificate & Internship Verifier for Students

## 🔧 Problem it Solves:
Makes it easier for **students** to prove their achievements and for **recruiters or colleges to verify them**. Prevents **fake internships and certificates**.

## 🎯 Key Users:
1. **Students** – Upload certificates & internship proof
2. **Verifiers (Startups / Orgs / Course Providers)** – Verify certificates
3. **Recruiters / Placement Cells** – Check authenticity of links or QR
4. **Admins** – Manage platform, approve abuse reports

## 🔄 Full User Flow

### 👩‍🎓 Student Flow:
- Sign up/Login via Google
- Fill profile (Name, college, degree, batch)
- Upload certificate with details (Title, Org, Date, File, Verifier Email)
- Submit for verification and wait
- Once verified: get public certificate link + QR code

### 🏢 Verifier Flow:
- Sign up with org email → Verifier Dashboard
- View verification requests → Approve/Reject with comments
- Mark as “Verified”, add logo/name

### 🧑‍💼 Recruiter Flow (No Login):
- Open public link or scan QR → View verified cert details securely

### 🔧 Admin Flow:
- View users/verifiers
- Moderate reports, remove spam
- Promote trusted orgs

## 🧱 Tech Stack (MERN)
- **MongoDB**: Users, Certs, Verifiers
- **Express.js**: Auth, API, uploads
- **React.js**: Dashboards, Public view
- **Node.js**: QR generation, email alerts
- **Firebase/Cloudinary**: File storage
- **JWT**: Auth sessions
- **Nodemailer**: Email verifier on new requests

## 📁 Pages (React)
- `/login` – Google login
- `/dashboard/student` – Upload/view certs
- `/dashboard/verifier` – Approve/reject certs
- `/dashboard/admin` – Manage users/verifiers
- `/cert/:id` – Public certificate view
- `/verify-request` – Become verifier