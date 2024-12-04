import { Metadata } from "next"
import { ContactForm } from "@/components/contact-form"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: "Contact Harshitha Silver Works - Get in Touch",
  description: "Contact the best silverware shop in Tenali, Andhra Pradesh. Reach out for inquiries about our silver products, bulk orders, or custom designs.",
}

export default function ContactPage() {
  return (
    <div className="container px-4 md:px-6 py-8">
      <h1 className="text-3xl font-bold mb-8">Contact Us</h1>
      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <ContactForm />
        </div>
        <div className="space-y-6">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4">Our Location</h2>
              <div className="aspect-video relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30708.915300000002!2d80.6333!3d16.2433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4a06e5e2d4f8b7%3A0x3c13f6e1f2a4e3d9!2sTenali%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1638180000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 mr-2 text-primary" />
                  <p>Gandhi Chowk Rd, Tenali, Andhra Pradesh, India - 522201</p>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 mr-2 text-primary" />
                  <p>+91 90520 11805</p>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 mr-2 text-primary" />
                  <p>info@srisilverworks.com</p>
                </div>
                <div className="flex items-center">
                  <Clock className="w-5 h-5 mr-2 text-primary" />
                  <p>Monday - Saturday: 10:00 AM - 8:00 PM<br />Sunday: Closed</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

