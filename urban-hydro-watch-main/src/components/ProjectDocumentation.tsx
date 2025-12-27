import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import systemArchitecture from "@/assets/system-architecture.jpg";
import iotSensors from "@/assets/iot-sensors.jpg";

const ProjectDocumentation = () => {
  return (
    <div className="space-y-6">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-foreground">IoT-Based Water Monitoring System</h1>
        <h2 className="text-2xl text-muted-foreground">For Urban Areas - Final Year Engineering Project</h2>
        <div className="flex justify-center gap-2">
          <Badge variant="secondary">IoT Engineering</Badge>
          <Badge variant="secondary">Water Management</Badge>
          <Badge variant="secondary">Smart Cities</Badge>
        </div>
      </div>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-6">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="objectives">Objectives</TabsTrigger>
          <TabsTrigger value="architecture">Architecture</TabsTrigger>
          <TabsTrigger value="hardware">Hardware</TabsTrigger>
          <TabsTrigger value="implementation">Implementation</TabsTrigger>
          <TabsTrigger value="analysis">Analysis</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Problem Statement</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-foreground leading-relaxed">
                  Urban water distribution systems face critical challenges in maintaining water quality and ensuring efficient distribution. 
                  Traditional monitoring methods are often manual, time-consuming, and provide limited real-time insights into water quality parameters.
                </p>
                <p className="text-foreground leading-relaxed">
                  This project addresses the need for continuous, automated monitoring of water quality parameters including pH levels, 
                  turbidity, flow rates, pressure, and tank levels in urban water distribution networks.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Project Scope</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Monitoring Parameters:</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• pH Level (6.5 - 8.5)</li>
                      <li>• Turbidity (less than 5 NTU)</li>
                      <li>• Flow Rate (L/min)</li>
                      <li>• Water Pressure (bar)</li>
                      <li>• Tank Water Level (%)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Key Features:</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Real-time data transmission</li>
                      <li>• Cloud-based data storage</li>
                      <li>• Web dashboard interface</li>
                      <li>• Mobile alert notifications</li>
                      <li>• Historical data analysis</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="objectives">
          <Card>
            <CardHeader>
              <CardTitle>Project Objectives</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3">Primary Objectives</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Badge className="mt-1">1</Badge>
                    <p>Design and implement an IoT-based water quality monitoring system capable of measuring pH, turbidity, flow rate, pressure, and water level parameters.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Badge className="mt-1">2</Badge>
                    <p>Establish reliable wireless communication protocols (Wi-Fi/GSM) for real-time data transmission to cloud platforms.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Badge className="mt-1">3</Badge>
                    <p>Develop a comprehensive web-based dashboard for data visualization and system monitoring.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Badge className="mt-1">4</Badge>
                    <p>Implement automated alert mechanisms for parameter threshold violations and system anomalies.</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">Secondary Objectives</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Badge variant="secondary" className="mt-1">A</Badge>
                    <p>Ensure system scalability for deployment across multiple monitoring locations.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Badge variant="secondary" className="mt-1">B</Badge>
                    <p>Optimize power consumption for long-term autonomous operation.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Badge variant="secondary" className="mt-1">C</Badge>
                    <p>Provide historical data analysis and trend prediction capabilities.</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="architecture">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>System Architecture</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <img 
                    src={systemArchitecture} 
                    alt="IoT Water Monitoring System Architecture" 
                    className="w-full rounded-lg border"
                  />
                  <p className="text-sm text-muted-foreground text-center">
                    Figure 1: Complete IoT Water Monitoring System Architecture
                  </p>
                </div>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Communication Protocol</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Primary: Wi-Fi (IEEE 802.11)</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Frequency: 2.4 GHz</li>
                      <li>• Range: 100-150m outdoor</li>
                      <li>• Data Rate: Up to 150 Mbps</li>
                      <li>• Protocol: TCP/IP, HTTP/HTTPS</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Backup: GSM/GPRS</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Network: 2G/3G/4G</li>
                      <li>• Coverage: Wide area network</li>
                      <li>• Protocols: MQTT, HTTP</li>
                      <li>• Power: Low consumption mode</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Data Flow</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Badge>1</Badge>
                      <span className="text-sm">Sensor data acquisition (every 30 seconds)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Badge>2</Badge>
                      <span className="text-sm">Local processing and validation</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Badge>3</Badge>
                      <span className="text-sm">Wireless transmission to cloud</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Badge>4</Badge>
                      <span className="text-sm">Database storage and analysis</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Badge>5</Badge>
                      <span className="text-sm">Dashboard visualization</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Badge>6</Badge>
                      <span className="text-sm">Alert generation and notification</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="hardware">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Hardware Components</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <img 
                      src={iotSensors} 
                      alt="IoT Sensors for Water Monitoring" 
                      className="w-full rounded-lg border mb-4"
                    />
                    <p className="text-sm text-muted-foreground text-center">
                      Figure 2: IoT Sensors and Measurement Devices
                    </p>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Microcontroller Unit</h4>
                      <p className="text-sm text-muted-foreground">ESP32 Development Board with built-in Wi-Fi and Bluetooth capabilities</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Communication Module</h4>
                      <p className="text-sm text-muted-foreground">SIM800L GSM/GPRS module for backup connectivity</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Power Management</h4>
                      <p className="text-sm text-muted-foreground">Solar panel + Li-ion battery system with charging controller</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">pH Sensor</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm"><strong>Model:</strong> PH-4502C</p>
                  <p className="text-sm"><strong>Range:</strong> 0-14 pH</p>
                  <p className="text-sm"><strong>Accuracy:</strong> ±0.1 pH</p>
                   <p className="text-sm"><strong>Response Time:</strong> Less than 1 minute</p>
                   <p className="text-sm"><strong>Operating Temp:</strong> 0-60°C</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Turbidity Sensor</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm"><strong>Model:</strong> SEN0189</p>
                  <p className="text-sm"><strong>Range:</strong> 0-1000 NTU</p>
                  <p className="text-sm"><strong>Accuracy:</strong> ±5%</p>
                  <p className="text-sm"><strong>Response Time:</strong> Less than 30 seconds</p>
                  <p className="text-sm"><strong>Output:</strong> 4-20mA analog</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Flow Sensor</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm"><strong>Model:</strong> YF-S201</p>
                  <p className="text-sm"><strong>Range:</strong> 1-30 L/min</p>
                  <p className="text-sm"><strong>Accuracy:</strong> ±3%</p>
                  <p className="text-sm"><strong>Output:</strong> Digital pulse</p>
                  <p className="text-sm"><strong>Pressure:</strong> ≤1.75MPa</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Pressure Sensor</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm"><strong>Model:</strong> MPX5700AP</p>
                  <p className="text-sm"><strong>Range:</strong> 15-700 kPa</p>
                  <p className="text-sm"><strong>Accuracy:</strong> ±2.5%</p>
                  <p className="text-sm"><strong>Output:</strong> 0.2-4.7V analog</p>
                  <p className="text-sm"><strong>Temperature:</strong> -40 to 125°C</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Level Sensor</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm"><strong>Model:</strong> HC-SR04</p>
                  <p className="text-sm"><strong>Range:</strong> 2-400 cm</p>
                  <p className="text-sm"><strong>Accuracy:</strong> ±3mm</p>
                  <p className="text-sm"><strong>Frequency:</strong> 40 kHz</p>
                  <p className="text-sm"><strong>Operating Voltage:</strong> 5V DC</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="implementation">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Implementation Methodology</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">Phase 1: Hardware Setup</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium mb-2">Sensor Calibration</h4>
                      <ul className="text-sm space-y-1">
                        <li>• pH sensor calibration with buffer solutions (pH 4, 7, 10)</li>
                        <li>• Turbidity sensor calibration with formazin standards</li>
                        <li>• Flow sensor calibration using volumetric method</li>
                        <li>• Pressure sensor calibration with reference gauge</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Installation Process</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Waterproof enclosure assembly</li>
                        <li>• Sensor mounting and positioning</li>
                        <li>• Power system installation</li>
                        <li>• Communication module setup</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Phase 2: Software Development</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium mb-2">Embedded Programming</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Arduino IDE/ESP-IDF development</li>
                        <li>• Sensor interface libraries</li>
                        <li>• Data acquisition algorithms</li>
                        <li>• Communication protocols implementation</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Cloud Integration</h4>
                      <ul className="text-sm space-y-1">
                        <li>• AWS IoT Core / Azure IoT Hub setup</li>
                        <li>• Database design (MongoDB/PostgreSQL)</li>
                        <li>• API development (REST/GraphQL)</li>
                        <li>• Real-time data streaming</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Phase 3: Dashboard Development</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Web-based dashboard built using React.js with real-time data visualization capabilities.
                  </p>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <h4 className="font-medium mb-2">Frontend Technologies</h4>
                      <ul className="text-sm space-y-1">
                        <li>• React.js + TypeScript</li>
                        <li>• Tailwind CSS</li>
                        <li>• Chart.js/Recharts</li>
                        <li>• WebSocket connections</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Backend Services</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Node.js/Express.js</li>
                        <li>• Socket.io for real-time</li>
                        <li>• JWT authentication</li>
                        <li>• Rate limiting & security</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Mobile Integration</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Progressive Web App (PWA)</li>
                        <li>• Push notification API</li>
                        <li>• Responsive design</li>
                        <li>• Offline capability</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="analysis">
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Benefits & Advantages</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2 text-success">Operational Benefits</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Real-time monitoring reduces response time by 80%</li>
                      <li>• Automated alerts prevent water quality violations</li>
                      <li>• Reduced manual inspection costs by 60%</li>
                      <li>• 24/7 continuous monitoring capability</li>
                      <li>• Historical data for trend analysis</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-success">Technical Benefits</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Scalable architecture for multiple locations</li>
                      <li>• Redundant communication pathways</li>
                      <li>• Low power consumption with solar backup</li>
                      <li>• Cloud-based data storage and analytics</li>
                      <li>• Mobile accessibility and remote control</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Challenges & Limitations</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2 text-warning">Technical Challenges</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Sensor drift and calibration requirements</li>
                      <li>• Network connectivity in remote areas</li>
                      <li>• Power management in harsh environments</li>
                      <li>• Data security and privacy concerns</li>
                      <li>• Weather resistance and durability</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-warning">Economic Limitations</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Initial setup and deployment costs</li>
                      <li>• Ongoing maintenance and calibration</li>
                      <li>• Cloud service subscription fees</li>
                      <li>• Skilled personnel training requirements</li>
                      <li>• Sensor replacement lifecycle costs</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Future Scope & Enhancements</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Short-term (6-12 months)</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Machine learning for predictive maintenance</li>
                      <li>• Integration with municipal water systems</li>
                      <li>• Enhanced mobile application features</li>
                      <li>• Additional water quality parameters</li>
                      <li>• Improved user interface design</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Medium-term (1-2 years)</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• AI-powered anomaly detection</li>
                      <li>• Integration with smart city platforms</li>
                      <li>• Blockchain for data integrity</li>
                      <li>• Edge computing implementation</li>
                      <li>• Automated valve control system</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Long-term (2-5 years)</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Satellite connectivity options</li>
                      <li>• Advanced water treatment automation</li>
                      <li>• Digital twin implementation</li>
                      <li>• Integration with weather systems</li>
                      <li>• Smart grid power management</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-muted rounded-lg">
                  <h4 className="font-semibold mb-2">Research Opportunities</h4>
                  <p className="text-sm text-muted-foreground">
                    This project opens avenues for research in IoT sensor fusion, machine learning applications in water management, 
                    edge computing for real-time processing, and integration with smart city infrastructure. Future research could 
                    focus on developing more accurate sensors, improving power efficiency, and creating autonomous water treatment systems.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ProjectDocumentation;