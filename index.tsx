"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./card"
import { Button } from "./button"
import { Badge } from "./badge"
import { Progress } from "./progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./tabs"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
} from "recharts"
import { BookOpen, Users, Award, Brain, Target, ChevronRight, Star, CheckCircle } from "lucide-react"

const majorData = [
  { name: "Teknik Informatika", students: 450, compatibility: 95 },
  { name: "Sistem Informasi", students: 320, compatibility: 88 },
  { name: "Teknik Elektro", students: 280, compatibility: 82 },
  { name: "Manajemen", students: 380, compatibility: 75 },
  { name: "Akuntansi", students: 290, compatibility: 70 },
  { name: "Psikologi", students: 220, compatibility: 85 },
]

const interestData = [
  { name: "Teknologi", value: 35, color: "#3b82f6" },
  { name: "Bisnis", value: 25, color: "#10b981" },
  { name: "Sains", value: 20, color: "#f59e0b" },
  { name: "Seni", value: 12, color: "#ef4444" },
  { name: "Sosial", value: 8, color: "#8b5cf6" },
]

const assessmentQuestions = [
  { id: 1, question: "Saya senang memecahkan masalah dengan logika dan analisis", category: "analytical" },
  { id: 2, question: "Saya tertarik dengan teknologi dan inovasi terbaru", category: "technology" },
  { id: 3, question: "Saya suka bekerja dalam tim dan memimpin proyek", category: "leadership" },
  { id: 4, question: "Saya senang belajar bahasa pemrograman", category: "programming" },
  { id: 5, question: "Saya tertarik dengan dunia bisnis dan kewirausahaan", category: "business" },
]

const recommendedMajors = [
  {
    name: "Teknik Informatika",
    match: 95,
    description: "Cocok untuk Anda yang menyukai pemrograman dan teknologi",
    skills: ["Programming", "Problem Solving", "Logical Thinking"],
    careers: ["Software Developer", "Data Scientist", "System Analyst"],
  },
  {
    name: "Sistem Informasi",
    match: 88,
    description: "Menggabungkan teknologi dengan manajemen bisnis",
    skills: ["Business Analysis", "Database Management", "Project Management"],
    careers: ["Business Analyst", "IT Consultant", "Project Manager"],
  },
  {
    name: "Teknik Elektro",
    match: 82,
    description: "Untuk yang tertarik dengan elektronika dan sistem",
    skills: ["Circuit Design", "Signal Processing", "Control Systems"],
    careers: ["Electronics Engineer", "Control Engineer", "R&D Engineer"],
  },
]

export default function ExpertSystemDashboard() {
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState<Record<number, number>>({})
  const [showResults, setShowResults] = useState(false)

  const handleAnswer = (questionId: number, score: number) => {
    setAnswers((prev) => ({ ...prev, [questionId]: score }))
  }

  const calculateResults = () => {
    setShowResults(true)
  }

  const totalAnswered = Object.keys(answers).length
  const progressPercentage = (totalAnswered / assessmentQuestions.length) * 100

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Sistem Pakar Jurusan Kuliah</h1>
              <p className="text-gray-600 mt-1">Temukan jurusan yang tepat berdasarkan minat dan bakat Anda</p>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant="secondary" className="px-3 py-1">
                <Brain className="w-4 h-4 mr-1" />
                AI Powered
              </Badge>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs defaultValue="dashboard" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 lg:w-fit">
            <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
            <TabsTrigger value="assessment">Assessment</TabsTrigger>
            <TabsTrigger value="results">Hasil</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          {/* Dashboard Tab */}
          <TabsContent value="dashboard" className="space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-blue-100 border border-blue-200 rounded-lg shadow-sm p-6">
                <div className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <h3 className="text-sm font-medium text-blue-900">Total Mahasiswa</h3>
                  <Users className="h-4 w-4 text-blue-700" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-900">2,847</div>
                  <p className="text-xs text-blue-700">+12% dari bulan lalu</p>
                </div>
              </div>

              <div className="bg-green-100 border border-green-200 rounded-lg shadow-sm p-6">
                <div className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <h3 className="text-sm font-medium text-green-900">Jurusan Tersedia</h3>
                  <BookOpen className="h-4 w-4 text-green-700" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-900">24</div>
                  <p className="text-xs text-green-700">Semua fakultas</p>
                </div>
              </div>

              <div className="bg-purple-100 border border-purple-200 rounded-lg shadow-sm p-6">
                <div className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <h3 className="text-sm font-medium text-purple-900">Tingkat Akurasi</h3>
                  <Target className="h-4 w-4 text-purple-700" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-900">94.2%</div>
                  <p className="text-xs text-purple-700">Berdasarkan feedback</p>
                </div>
              </div>

              <div className="bg-orange-100 border border-orange-200 rounded-lg shadow-sm p-6">
                <div className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <h3 className="text-sm font-medium text-orange-900">Assessment Selesai</h3>
                  <Award className="h-4 w-4 text-orange-700" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-orange-900">1,234</div>
                  <p className="text-xs text-orange-700">Bulan ini</p>
                </div>
              </div>
            </div>

            {/* Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Popularitas Jurusan</CardTitle>
                  <CardDescription>Jumlah mahasiswa per jurusan</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={majorData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" angle={-45} textAnchor="end" height={80} />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="students" fill="#3b82f6" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Distribusi Minat</CardTitle>
                  <CardDescription>Berdasarkan hasil assessment</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={interestData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {interestData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Mulai Assessment</CardTitle>
                <CardDescription>Temukan jurusan yang tepat untuk Anda</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 mb-2">
                      Assessment terdiri dari 15 pertanyaan yang akan menganalisis minat dan bakat Anda
                    </p>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-gray-600">Estimasi waktu: 5-10 menit</span>
                    </div>
                  </div>
                  <Button onClick={() => setCurrentStep(1)} className="bg-blue-600 hover:bg-blue-700">
                    Mulai Assessment
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Assessment Tab */}
          <TabsContent value="assessment" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Assessment Minat dan Bakat</CardTitle>
                <CardDescription>
                  Jawab pertanyaan berikut dengan skala 1-5 (1 = Sangat Tidak Setuju, 5 = Sangat Setuju)
                </CardDescription>
                <div className="mt-4">
                  <div className="flex justify-between text-sm text-gray-600 mb-2">
                    <span>Progress</span>
                    <span>
                      {totalAnswered}/{assessmentQuestions.length}
                    </span>
                  </div>
                  <Progress value={progressPercentage} className="w-full" />
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                {assessmentQuestions.map((q) => (
                  <div key={q.id} className="p-4 border rounded-lg">
                    <h3 className="font-medium mb-3">
                      {q.id}. {q.question}
                    </h3>
                    <div className="flex space-x-2">
                      {[1, 2, 3, 4, 5].map((score) => (
                        <Button
                          key={score}
                          variant={answers[q.id] === score ? "default" : "outline"}
                          size="sm"
                          onClick={() => handleAnswer(q.id, score)}
                          className="w-12 h-12"
                        >
                          {score}
                        </Button>
                      ))}
                    </div>
                  </div>
                ))}

                {totalAnswered === assessmentQuestions.length && (
                  <div className="flex justify-center pt-4">
                    <Button onClick={calculateResults} size="lg" className="bg-green-600 hover:bg-green-700">
                      Lihat Hasil Assessment
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Results Tab */}
          <TabsContent value="results" className="space-y-6">
            {showResults ? (
              <>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Star className="w-5 h-5 mr-2 text-yellow-500" />
                      Rekomendasi Jurusan untuk Anda
                    </CardTitle>
                    <CardDescription>Berdasarkan analisis minat dan bakat Anda</CardDescription>
                  </CardHeader>
                </Card>

                <div className="space-y-4">
                  {recommendedMajors.map((major, index) => (
                    <Card key={index} className="border-l-4 border-l-blue-500">
                      <CardContent className="pt-6">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center mb-2">
                              <h3 className="text-xl font-semibold">{major.name}</h3>
                              <Badge variant="secondary" className="ml-2">
                                {major.match}% Match
                              </Badge>
                            </div>
                            <p className="text-gray-600 mb-4">{major.description}</p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div>
                                <h4 className="font-medium mb-2">Skill yang Dibutuhkan:</h4>
                                <div className="flex flex-wrap gap-1">
                                  {major.skills.map((skill, i) => (
                                    <Badge key={i} variant="outline" className="text-xs">
                                      {skill}
                                    </Badge>
                                  ))}
                                </div>
                              </div>

                              <div>
                                <h4 className="font-medium mb-2">Prospek Karir:</h4>
                                <div className="flex flex-wrap gap-1">
                                  {major.careers.map((career, i) => (
                                    <Badge key={i} variant="outline" className="text-xs">
                                      {career}
                                    </Badge>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="ml-4">
                            <div className="text-right">
                              <div className="text-2xl font-bold text-blue-600">{major.match}%</div>
                              <div className="text-sm text-gray-500">Compatibility</div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </>
            ) : (
              <Card>
                <CardContent className="pt-6">
                  <div className="text-center py-12">
                    <Brain className="w-16 h-16 mx-auto text-gray-400 mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Belum Ada Hasil Assessment</h3>
                    <p className="text-gray-600 mb-4">
                      Silakan selesaikan assessment terlebih dahulu untuk melihat rekomendasi jurusan
                    </p>
                    <Button onClick={() => setCurrentStep(1)}>Mulai Assessment</Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          {/* Analytics Tab */}
          <TabsContent value="analytics" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Tingkat Kepuasan Pengguna</CardTitle>
                  <CardDescription>Rating feedback dari pengguna</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[5, 4, 3, 2, 1].map((rating) => (
                      <div key={rating} className="flex items-center space-x-2">
                        <span className="w-8 text-sm">{rating}★</span>
                        <Progress value={rating === 5 ? 75 : rating === 4 ? 20 : 5} className="flex-1" />
                        <span className="w-12 text-sm text-gray-600">
                          {rating === 5 ? "75%" : rating === 4 ? "20%" : "5%"}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 pt-4 border-t">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Rating Rata-rata</span>
                      <span className="text-2xl font-bold text-yellow-500">4.6★</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Akurasi Prediksi</CardTitle>
                  <CardDescription>Persentase akurasi sistem per bulan</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={200}>
                    <LineChart
                      data={[
                        { month: "Jan", accuracy: 89 },
                        { month: "Feb", accuracy: 91 },
                        { month: "Mar", accuracy: 93 },
                        { month: "Apr", accuracy: 94 },
                        { month: "May", accuracy: 94.2 },
                      ]}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis domain={[85, 100]} />
                      <Tooltip />
                      <Line type="monotone" dataKey="accuracy" stroke="#3b82f6" strokeWidth={2} />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Statistik Penggunaan</CardTitle>
                <CardDescription>Data penggunaan sistem dalam 6 bulan terakhir</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">8,547</div>
                    <div className="text-sm text-gray-600">Total Assessment</div>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">7,892</div>
                    <div className="text-sm text-gray-600">Assessment Selesai</div>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600">92.3%</div>
                    <div className="text-sm text-gray-600">Tingkat Penyelesaian</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
