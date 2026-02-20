import { useState, type FormEvent } from 'react';
import {  
  MapPin, 
  DollarSign, 
  Clock, 
  ArrowLeft, 
  CheckCircle2, 
  ChevronRight,
  HeartHandshake
} from 'lucide-react';

// --- Types ---
export interface Internship {
  id: number;
  title: string;
  company: string;
  location: string;
  type: string;
  stipend: string;
  duration: string;
  skills: string[];
  postedAt: string;
  isFree: boolean;
  image: string;
}

type ViewState = 'list' | 'apply' | 'success';

// --- Mock Data ---
const INTERNSHIPS: Internship[] = [
  {
    id: 1,
    title: "Frontend Engineering Intern",
    company: "TechNova Solutions",
    location: "Remote",
    type: "Full-time Intern",
    stipend: "$1,200 / month",
    duration: "3 Months",
    skills: ["React", "JavaScript", "Tailwind CSS"],
    postedAt: "2 days ago",
    isFree: false,
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 2,
    title: "Data Science Intern",
    company: "DataSphere",
    location: "New York, NY",
    type: "Part-time Intern",
    stipend: "$1,500 / month",
    duration: "6 Months",
    skills: ["Python", "SQL", "Machine Learning"],
    postedAt: "1 week ago",
    isFree: true,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 3,
    title: "Product Design (UI/UX) Intern",
    company: "CreativeApp",
    location: "San Francisco, CA",
    type: "Full-time Intern",
    stipend: "$1,800 / month",
    duration: "3 Months",
    skills: ["Figma", "Prototyping", "User Research"],
    postedAt: "3 days ago",
    isFree: false,
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 4,
    title: "Marketing Strategy Intern",
    company: "Petronas",
    location: "Kuala Lumpur, Malaysia",
    type: "Full-time Intern",
    stipend: "Unpaid",
    duration: "2 Months",
    skills: ["Strategy", "Campaigns", "PR"],
    postedAt: "Just now",
    isFree: true,
    image: "https://tse3.mm.bing.net/th/id/OIF.WrVIDYSSkyVEAI95d6qeYg?rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    id: 5,
    title: "Global Marketing Intern",
    company: "Samsung Electronics",
    location: "Seoul, South Korea",
    type: "Full-time Intern",
    stipend: "Unpaid",
    duration: "4 Months",
    skills: ["Digital Marketing", "SEO", "Market Research"],
    postedAt: "5 hours ago",
    isFree: true,
    image: "https://images.unsplash.com/photo-1517154421773-0529f29ea451?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 6,
    title: "Market Sales Associate",
    company: "Alibaba Group",
    location: "Hangzhou, China",
    type: "Part-time Intern",
    stipend: "Unpaid",
    duration: "3 Months",
    skills: ["Market Selling", "B2B Sales", "Client Relations"],
    postedAt: "12 hours ago",
    isFree: true,
    image: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 7,
    title: "Backend Developer Intern",
    company: "CloudSync Inc.",
    location: "Austin, TX",
    type: "Full-time Intern",
    stipend: "$1,400 / month",
    duration: "6 Months",
    skills: ["Node.js", "Express", "MongoDB"],
    postedAt: "5 days ago",
    isFree: false,
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=400&q=80"
  }
];

export default function App() {
  const [currentView, setCurrentView] = useState<ViewState>('list');
  const [selectedInternship, setSelectedInternship] = useState<Internship | null>(null);

  const handleApplyClick = (internship: Internship) => {
    setSelectedInternship(internship);
    setCurrentView('apply');
    window.scrollTo(0, 0);
  };

  const handleBackToList = () => {
    setCurrentView('list');
    setSelectedInternship(null);
    window.scrollTo(0, 0);
  };

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setCurrentView('success');
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-slate-950 font-sans text-slate-200 selection:bg-blue-500/30">
      {/* Navigation Bar */}
      <nav className="bg-slate-900 border-b border-slate-800 sticky top-0 z-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center gap-2 cursor-pointer" onClick={handleBackToList}>
              <div className="bg-none p-2 rounded-lg">
                <img src="/src/mini.png" alt="logo" className='rounded-sm w-7.5'/>
              </div>
              <span className="text-xl font-bold bg-clip-text text-transparent bg-linear-to-r from-blue-400 to-blue-600">
                InternNexus
              </span>
            </div>
            <div className="hidden sm:flex items-center gap-6 text-sm font-medium text-slate-400">
              <a href="#" className="hover:text-blue-400 transition-colors">Find Internships</a>
              <a href="#" className="hover:text-blue-400 transition-colors">Companies</a>
              <a href="#" className="hover:text-blue-400 transition-colors">Career Advice</a>
            </div>
            {/* <div className="flex items-center gap-4">
              <button className="text-sm font-medium text-slate-400 hover:text-white hidden sm:block transition-colors">Log in</button>
              <button className="bg-white text-slate-900 px-4 py-2 rounded-lg text-sm font-bold hover:bg-slate-200 transition-colors">
                Sign up
              </button>
            </div> */}
          </div>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {currentView === 'list' && (
          <InternshipList onApply={handleApplyClick} />
        )}
        
        {currentView === 'apply' && selectedInternship && (
          <ApplicationForm 
            internship={selectedInternship} 
            onBack={handleBackToList} 
            onSubmit={handleFormSubmit} 
          />
        )}

        {currentView === 'success' && (
          <SuccessView onBack={handleBackToList} />
        )}
      </main>
    </div>
  );
}

// --- View: Internship List ---
interface InternshipListProps {
  onApply: (internship: Internship) => void;
}

function InternshipList({ onApply }: InternshipListProps) {
  return (
    <div className="space-y-6">
      {/* Header & Search */}
      <div className="bg-slate-900 p-6 sm:p-8 rounded-2xl border border-slate-800 mb-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-72 h-72 rounded-full bg-blue-600/10 blur-3xl pointer-events-none"></div>
        <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2 relative z-10">Find your dream internship</h1>
        <p className="text-slate-400 mb-6 relative z-10">Explore open opportunities across top global companies.</p>
    
      </div>

      {/* List */}
      <div className="space-y-4">
        {INTERNSHIPS.map((internship) => (
          <div 
            key={internship.id} 
            className="bg-slate-900 p-5 rounded-2xl border border-slate-800 hover:border-blue-500/50 transition-all group flex flex-col sm:flex-row gap-6 items-start sm:items-center"
          >
            {/* Internship Image */}
            <div className="w-full sm:w-40 h-48 sm:h-32 rounded-xl overflow-hidden shrink-0 relative">
              <img 
                src={internship.image} 
                alt={internship.company} 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-linear-to-t from-slate-900/60 to-transparent sm:hidden"></div>
            </div>

            {/* Content */}
            <div className="grow w-full">
              <div className="flex justify-between items-start mb-1">
                <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors flex items-center gap-2">
                  {internship.title}
                  {internship.isFree && (
                    <span className="inline-flex items-center gap-1 text-[10px] uppercase tracking-wider font-bold bg-green-500/20 text-green-400 px-2 py-0.5 rounded-full border border-green-500/30">
                      <HeartHandshake className="w-3 h-3" />
                      Free Program
                    </span>
                  )}
                </h3>
                <span className="text-xs font-medium bg-slate-800 text-slate-400 px-2.5 py-1 rounded-full whitespace-nowrap hidden sm:block border border-slate-700">
                  {internship.postedAt}
                </span>
              </div>
              <p className="text-slate-400 font-medium mb-3">{internship.company}</p>
              
              <div className="flex flex-wrap gap-y-2 gap-x-5 text-sm text-slate-400 mb-4">
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-slate-500" />
                  {internship.location}
                </div>
                <div className="flex items-center gap-1.5">
                  <DollarSign className="w-4 h-4 text-slate-500" />
                  {internship.stipend}
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-slate-500" />
                  {internship.duration}
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {internship.skills.map((skill, index) => (
                  <span key={index} className="inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-950 text-slate-300 border border-slate-800">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Action */}
            <div className="w-full sm:w-auto mt-2 sm:mt-0 shrink-0">
               <button 
                onClick={() => onApply(internship)}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-2.5 bg-slate-800 border border-slate-700 text-white rounded-xl font-semibold hover:bg-white hover:text-slate-900 transition-all group/btn"
              >
                Apply Now
                <ChevronRight className="w-4 h-4 text-slate-400 group-hover/btn:text-slate-900" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// --- View: Application Form ---
interface ApplicationFormProps {
  internship: Internship;
  onBack: () => void;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

function ApplicationForm({ internship, onBack, onSubmit }: ApplicationFormProps) {
  return (
    <div className="max-w-3xl mx-auto">
      <button 
        onClick={onBack}
        className="flex items-center gap-2 text-slate-400 hover:text-white font-medium mb-6 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to listings
      </button>

      <div className="bg-slate-900 rounded-3xl border border-slate-800 overflow-hidden">
        {/* Form Header */}
        <div className="bg-slate-950 p-8 sm:p-10 text-white relative overflow-hidden border-b border-slate-800">
          <img 
            src={internship.image} 
            alt="Cover" 
            className="absolute inset-0 w-full h-full object-cover opacity-20 blur-sm"
          />
          <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/80 to-transparent"></div>
          
          <div className="relative z-10">
            {internship.isFree && (
              <span className="inline-flex mb-3 items-center gap-1 text-xs uppercase tracking-wider font-bold bg-green-500/20 text-green-400 px-3 py-1 rounded-full border border-green-500/30">
                <HeartHandshake className="w-3 h-3" />
                Free Program
              </span>
            )}
            <h2 className="text-3xl font-bold mb-2">Submit your application</h2>
            <p className="text-slate-400 text-lg">
              Applying for <span className="text-white font-semibold">{internship.title}</span> at <span className="text-white font-semibold">{internship.company}</span>
            </p>
          </div>
        </div>

        {/* Form Body */}
        <form onSubmit={onSubmit} className="p-8 sm:p-10 space-y-10">
          
          {/* Section: Personal Details */}
          <div>
            <h3 className="text-lg font-semibold text-white border-b border-slate-800 pb-2 mb-4">Personal Details</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1.5">First Name *</label>
                <input required type="text" className="w-full px-4 py-2.5 rounded-xl border border-slate-700 bg-slate-950 text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow placeholder-slate-600" placeholder="Jane" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1.5">Last Name *</label>
                <input required type="text" className="w-full px-4 py-2.5 rounded-xl border border-slate-700 bg-slate-950 text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow placeholder-slate-600" placeholder="Doe" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1.5">Date of Birth *</label>
                <input required type="date" className="w-full px-4 py-2.5 rounded-xl border border-slate-700 bg-slate-950 text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1.5">Gender *</label>
                <select required className="w-full px-4 py-2.5 rounded-xl border border-slate-700 bg-slate-950 text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow">
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="non-binary">Non-binary</option>
                  <option value="prefer-not-to-say">Prefer not to say</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-slate-300 mb-1.5">Nationality *</label>
                <input required type="text" className="w-full px-4 py-2.5 rounded-xl border border-slate-700 bg-slate-950 text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow placeholder-slate-600" placeholder="e.g. American" />
              </div>
            </div>
          </div>

          {/* Section: Contact & Location */}
          <div>
            <h3 className="text-lg font-semibold text-white border-b border-slate-800 pb-2 mb-4">Contact & Location</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1.5">Email Address *</label>
                <input required type="email" className="w-full px-4 py-2.5 rounded-xl border border-slate-700 bg-slate-950 text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow placeholder-slate-600" placeholder="jane.doe@example.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1.5">Phone Number *</label>
                <input required type="tel" className="w-full px-4 py-2.5 rounded-xl border border-slate-700 bg-slate-950 text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow placeholder-slate-600" placeholder="+1 (555) 000-0000" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-slate-300 mb-1.5">Address (Living Place)</label>
                <input type="text" className="w-full px-4 py-2.5 rounded-xl border border-slate-700 bg-slate-950 text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow placeholder-slate-600" placeholder="123 Main St, Apt 4B" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1.5">Current City *</label>
                <input required type="text" className="w-full px-4 py-2.5 rounded-xl border border-slate-700 bg-slate-950 text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow placeholder-slate-600" placeholder="New York" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1.5">Current Country *</label>
                <input required type="text" className="w-full px-4 py-2.5 rounded-xl border border-slate-700 bg-slate-950 text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow placeholder-slate-600" placeholder="United States" />
              </div>
            </div>
          </div>

          {/* Section: Education & Academic Background */}
          <div>
            <h3 className="text-lg font-semibold text-white border-b border-slate-800 pb-2 mb-4">Education & Academic Background</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1.5">Institution Name *</label>
                <input required type="text" className="w-full px-4 py-2.5 rounded-xl border border-slate-700 bg-slate-950 text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow placeholder-slate-600" placeholder="University Name" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1.5">Degree / Major *</label>
                <input required type="text" className="w-full px-4 py-2.5 rounded-xl border border-slate-700 bg-slate-950 text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow placeholder-slate-600" placeholder="B.S. in Computer Science" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-slate-300 mb-1.5">Academic Skills</label>
                <input type="text" className="w-full px-4 py-2.5 rounded-xl border border-slate-700 bg-slate-950 text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow placeholder-slate-600" placeholder="e.g. Data Analysis, Research, Python, Project Management" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-slate-300 mb-1.5">Languages Spoken</label>
                <input type="text" className="w-full px-4 py-2.5 rounded-xl border border-slate-700 bg-slate-950 text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow placeholder-slate-600" placeholder="English (Fluent), Spanish (Intermediate)" />
              </div>
            </div>
          </div>

          {/* Section: Experience & Highlights */}
          <div>
            <h3 className="text-lg font-semibold text-white border-b border-slate-800 pb-2 mb-4">Experience & Highlights</h3>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-1.5">Relevant Experience & Achievements</label>
              <textarea 
                rows={4} 
                className="w-full px-4 py-3 rounded-xl border border-slate-700 bg-slate-950 text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow resize-y placeholder-slate-600" 
                placeholder="Briefly describe your past work experience, projects, or extracurricular achievements..."
              ></textarea>
            </div>
          </div>

          {/* Section: Links */}
          <div>
            <h3 className="text-lg font-semibold text-white border-b border-slate-800 pb-2 mb-4">Professional Presence</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1.5">LinkedIn Profile *</label>
                <input required type="url" className="w-full px-4 py-2.5 rounded-xl border border-slate-700 bg-slate-950 text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow placeholder-slate-600" placeholder="https://linkedin.com/in/janedoe" />
              </div>
              
            </div>
          </div>

          {/* Section: Documents */}
          {/* <div>
            <h3 className="text-lg font-semibold text-white border-b border-slate-800 pb-2 mb-4">Resume & Cover Letter</h3>
            
            <div className="mb-6">
              <label className="block text-sm font-medium text-slate-300 mb-1.5">Resume / CV *</label>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-slate-700 border-dashed rounded-xl hover:border-blue-500 hover:bg-slate-800/50 transition-colors cursor-pointer group bg-slate-950">
                <div className="space-y-1 text-center">
                  <Upload className="mx-auto h-12 w-12 text-slate-500 group-hover:text-blue-400 transition-colors" />
                  <div className="flex text-sm text-slate-400 justify-center">
                    <label htmlFor="file-upload" className="relative cursor-pointer rounded-md font-medium text-blue-500 hover:text-blue-400 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500 focus-within:ring-offset-slate-900">
                      <span>Upload a file</span>
                      <input id="file-upload" name="file-upload" type="file" className="sr-only" required />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs text-slate-500">
                    PDF, DOC, DOCX up to 10MB
                  </p>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-1.5">Cover Letter (Optional)</label>
              <textarea 
                rows={5} 
                className="w-full px-4 py-3 rounded-xl border border-slate-700 bg-slate-950 text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow resize-y placeholder-slate-600" 
                placeholder="Briefly explain why you're a great fit for this role..."
              ></textarea>
            </div>
          </div> */}

          {/* Submit Action */}
          <div className="pt-4 flex items-center justify-end gap-4 border-t border-slate-800">
            <button 
              type="button" 
              onClick={onBack}
              className="px-6 py-3 rounded-xl font-medium text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              Cancel
            </button>
            <button 
              type="submit" 
              className="px-8 py-3 bg-blue-600 rounded-xl text-white font-semibold hover:bg-blue-500 focus:ring-4 focus:ring-blue-900 transition-all"
            >
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

// --- View: Success Confirmation ---
interface SuccessViewProps {
  onBack: () => void;
}

function SuccessView({ onBack }: SuccessViewProps) {
  return (
    <div className="max-w-2xl mx-auto mt-12 text-center bg-slate-900 p-12 rounded-3xl border border-slate-800">
      <div className="inline-flex items-center justify-center w-20 h-20 bg-green-500/20 rounded-full mb-6 border border-green-500/30">
        <CheckCircle2 className="w-10 h-10 text-green-400" />
      </div>
      <h2 className="text-3xl font-bold text-white mb-4">Application Submitted!</h2>
      <p className="text-slate-400 text-lg mb-8 max-w-md mx-auto">
        Thank you for applying through InternNexus. We will review your application and <p className='text-slate-400 text-lg mb-8 max-w-md mx-auto font-bold'>get back to you soon via email.</p>
      </p>
      <button 
        onClick={onBack}
        className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-white text-slate-900 rounded-xl font-bold hover:bg-slate-200 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        Browse more internships
      </button>
    </div>
  );
}